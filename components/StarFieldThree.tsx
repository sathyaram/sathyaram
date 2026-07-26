"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import type * as ThreeType from "three";
import { getTheme, getServerTheme, subscribeTheme } from "@/lib/theme";

const STAR_COUNT = 2200;
// Depth of the slab of space the stars occupy, in world units.
const FIELD_DEPTH = 900;
const FIELD_SPREAD = 700;
// How fast stars stream toward the camera (world units per second).
const SPEED = 26;
// How far the cursor pushes the camera, and how quickly it eases there.
const PARALLAX = 135;
const EASE = 0.045;

export default function StarFieldThree() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme !== "dark") return;
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let teardown: (() => void) | undefined;

    // three.js (~130 KiB gzipped) drives nothing but this decorative
    // background, so it's code-split into its own chunk and fetched here —
    // after hydration, once the field is actually needed (dark mode) —
    // rather than sitting in the initial bundle and delaying first paint.
    import("three").then((THREE) => {
      if (disposed || !mountRef.current) return;
      teardown = startField(THREE, mount);
    });

    return () => {
      disposed = true;
      teardown?.();
    };
  }, [theme]);

  if (theme !== "dark") return null;

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}

/**
 * Builds the WebGL starfield and returns its teardown. Parameterized over the
 * runtime three.js module (dynamically imported by the component above) so
 * the library stays out of the initial bundle.
 */
function startField(
  THREE: typeof import("three"),
  mount: HTMLDivElement,
): () => void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function makeTexture(draw: (ctx: CanvasRenderingContext2D) => void) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) draw(ctx);
    return new THREE.CanvasTexture(canvas);
  }

  const scene = new THREE.Scene();
  // Stars are recycled to the back of the slab, which would make them pop
  // in at full brightness. Black fog fades anything near the far plane to
  // nothing (additive blending + black = invisible), so they ease in as
  // they approach. This is done on the GPU, so it costs nothing per frame.
  scene.fog = new THREE.Fog(0x000000, FIELD_DEPTH * 0.3, FIELD_DEPTH);

  const camera = new THREE.PerspectiveCamera(70, 1, 1, FIELD_DEPTH * 1.6);
  camera.position.z = 0;

  // The canvas paints the page background itself rather than being
  // transparent over it. A transparent canvas can't carry additive blending
  // cleanly here: three.js's additive mode accumulates the alpha channel too,
  // so a point faded to black still writes alpha and composites as a black
  // speck *darker* than the page. (Holding alpha instead isn't an option —
  // the context is premultiplied, where RGB above alpha is invalid and gets
  // clamped away to nothing.) Drawing onto an opaque backdrop of the same
  // colour sidesteps the alpha channel completely: black adds nothing, which
  // is exactly what fading out should mean.
  const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const pageBackground = getComputedStyle(document.documentElement)
    .getPropertyValue("--background")
    .trim();
  renderer.setClearColor(new THREE.Color(pageBackground || "#0b0f1a"), 1);
  // three.js is loaded async, so the canvas would otherwise pop in with no
  // warning. Start it transparent and ease it up once it's mounted, so the
  // field fades in gracefully instead of appearing out of nowhere.
  const canvas = renderer.domElement;
  canvas.style.opacity = "0";
  canvas.style.transition = "opacity 600ms ease";
  mount.appendChild(canvas);
  // Double rAF so the opacity:0 start frame is painted before we flip to 1,
  // which is what actually triggers the transition.
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    }),
  );

  // Round dot with a tight falloff: a crisp core and only a hint of halo,
  // so the field reads as pinpoint stars rather than soft blobs.
  const roundTexture = makeTexture((ctx) => {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.16, "rgba(255,255,255,0.95)");
    gradient.addColorStop(0.4, "rgba(255,255,255,0.16)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  });

  // Builds one cloud of points scattered through the slab of space.
  const createCloud = (
    count: number,
    texture: ThreeType.Texture,
    size: number,
  ) => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const tint = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const o = i * 3;
      positions[o] = (Math.random() - 0.5) * FIELD_SPREAD * 2;
      positions[o + 1] = (Math.random() - 0.5) * FIELD_SPREAD * 2;
      positions[o + 2] = -Math.random() * FIELD_DEPTH;

      // Loosely the real spectral spread, but leaning noticeably more
      // colourful: under 40% white/pale now, the rest a punchier spread
      // across blue, brand-blue, cyan, yellow, orange, red, violet,
      // magenta, and teal — higher saturation and a bit lower lightness
      // than a strict night sky, so the colour actually reads against
      // the dark field instead of washing out to near-white.
      const roll = Math.random();
      if (roll < 0.06) tint.setHSL(0.6, 0.7, 0.75); // blue
      else if (roll < 0.11) tint.setHSL(0.63, 0.85, 0.68); // brand blue
      else if (roll < 0.17) tint.setHSL(0.52, 0.65, 0.78); // ice cyan
      else if (roll < 0.23) tint.setHSL(0.58, 0.28, 0.9); // blue-white
      else if (roll < 0.45) tint.setHSL(0, 0, 0.85 + Math.random() * 0.15); // white
      else if (roll < 0.55) tint.setHSL(0.13, 0.45, 0.85); // yellow-white
      else if (roll < 0.67) tint.setHSL(0.1, 0.75, 0.72); // yellow
      else if (roll < 0.77) tint.setHSL(0.07, 0.8, 0.66); // orange
      else if (roll < 0.8) tint.setHSL(0.02, 0.8, 0.65); // red
      else if (roll < 0.88) tint.setHSL(0.77, 0.6, 0.75); // violet
      else if (roll < 0.94) tint.setHSL(0.92, 0.7, 0.72); // magenta
      else tint.setHSL(0.45, 0.6, 0.68); // teal
      colors[o] = tint.r;
      colors[o + 1] = tint.g;
      colors[o + 2] = tint.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size,
      map: texture,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      fog: true,
      // Safe now that the canvas is opaque (see the renderer setup) — a star
      // the fog has faded to black simply adds nothing.
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    return { geometry, material, count, points };
  };

  const clouds = [createCloud(STAR_COUNT, roundTexture, 4.5)];

  /*
   * "Catching" a star: click one and it comes apart in your hand — a bright
   * pop that sprays outward and fades, with the original star recycled to
   * the back of the field so the density stays constant.
   *
   * The sparks live in one pre-allocated pool (no per-click allocation) and
   * fade by scaling their vertex colour toward black, which reads as fading
   * out under additive blending — the same trick the scene fog uses.
   */
  const SPARK_POOL = 320;
  const SPARKS_PER_CATCH = 26;
  const SPARK_LIFE = 0.85;
  const SPARK_SPEED = 95;

  const sparkPos = new Float32Array(SPARK_POOL * 3);
  const sparkCol = new Float32Array(SPARK_POOL * 3);
  const sparkVel = new Float32Array(SPARK_POOL * 3);
  const sparkTint = new Float32Array(SPARK_POOL * 3);
  const sparkLife = new Float32Array(SPARK_POOL);
  let sparkCursor = 0;

  // Park the whole pool far off-screen up front. An unused spark left at the
  // origin still gets rasterized, and a *black* point is not free: see the
  // blending note below.
  const PARKED_Y = 1e6;
  for (let i = 0; i < SPARK_POOL; i++) sparkPos[i * 3 + 1] = PARKED_Y;

  const sparkGeometry = new THREE.BufferGeometry();
  sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3));
  sparkGeometry.setAttribute("color", new THREE.BufferAttribute(sparkCol, 3));
  const sparkMaterial = new THREE.PointsMaterial({
    size: 3.4,
    map: roundTexture,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    fog: true,
    // Safe now that the canvas is opaque (see the renderer setup) — a spent
    // spark fades to black and simply stops contributing, no dust left over.
    blending: THREE.AdditiveBlending,
  });
  const sparkPoints = new THREE.Points(sparkGeometry, sparkMaterial);
  // Every spark starts at (0,0,0) in the buffer, so the geometry's computed
  // bounding sphere is a zero-radius point at the origin — which sits on the
  // camera's near plane and gets the whole cloud frustum-culled before it can
  // draw. Positions are driven by hand each frame, so those bounds are
  // meaningless anyway; skip culling for this object.
  sparkPoints.frustumCulled = false;
  scene.add(sparkPoints);

  const catchStar = (x: number, y: number, z: number, r: number, g: number, b: number) => {
    // The same world-space burst covers far fewer screen pixels when it's
    // deep in the slab, so scale it by distance to keep the pop a consistent
    // size on screen wherever the caught star happened to be.
    const depthScale = Math.max(0.4, Math.min(2.6, Math.abs(z) / 260));

    for (let i = 0; i < SPARKS_PER_CATCH; i++) {
      const s = sparkCursor;
      sparkCursor = (sparkCursor + 1) % SPARK_POOL;
      const o = s * 3;

      sparkPos[o] = x;
      sparkPos[o + 1] = y;
      sparkPos[o + 2] = z;

      // Even scatter over a sphere, with a spread of speeds so the burst
      // has some depth to it rather than reading as a clean ring.
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = SPARK_SPEED * depthScale * (0.35 + Math.random() * 0.95);
      sparkVel[o] = Math.sin(phi) * Math.cos(theta) * speed;
      sparkVel[o + 1] = Math.sin(phi) * Math.sin(theta) * speed;
      sparkVel[o + 2] = Math.cos(phi) * speed * 0.55;

      // Overdriven from the star's own colour so the first frames read as a
      // flash before settling into the star's hue as it fades.
      sparkTint[o] = r * 2.2;
      sparkTint[o + 1] = g * 2.2;
      sparkTint[o + 2] = b * 2.2;
      sparkLife[s] = 1;
    }
  };

  const raycaster = new THREE.Raycaster();
  // World units, not pixels — generous enough that catching a star feels
  // achievable without it grabbing one from across the screen.
  raycaster.params.Points.threshold = 13;
  const ndc = new THREE.Vector2();

  const onClick = (event: MouseEvent) => {
    if (reduced) return;
    // The field sits behind the whole page (pointer-events: none), so this
    // listens on the window. Skip clicks meant for real UI, and skip the
    // click that ends a text selection.
    const target = event.target;
    if (
      target instanceof Element &&
      target.closest('a, button, input, textarea, select, label, [role="button"], [role="dialog"]')
    ) {
      return;
    }
    if ((window.getSelection()?.toString().length ?? 0) > 0) return;

    ndc.x = (event.clientX / window.innerWidth) * 2 - 1;
    ndc.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(ndc, camera);

    const cloud = clouds[0];
    const hits = raycaster.intersectObject(cloud.points, false);
    if (!hits.length) return;

    // Nearest to the ray, not nearest to the camera — that's the star that
    // actually looks like the one under the cursor.
    let best = hits[0];
    for (const hit of hits) {
      if ((hit.distanceToRay ?? Infinity) < (best.distanceToRay ?? Infinity)) best = hit;
    }
    const index = best.index;
    if (index === undefined) return;

    const posAttr = cloud.geometry.attributes.position as ThreeType.BufferAttribute;
    const colAttr = cloud.geometry.attributes.color as ThreeType.BufferAttribute;
    const pos = posAttr.array as Float32Array;
    const col = colAttr.array as Float32Array;
    const o = index * 3;

    catchStar(pos[o], pos[o + 1], pos[o + 2], col[o], col[o + 1], col[o + 2]);

    // The caught star respawns at the back of the slab, so the field never
    // thins out no matter how many you catch.
    pos[o] = (Math.random() - 0.5) * FIELD_SPREAD * 2;
    pos[o + 1] = (Math.random() - 0.5) * FIELD_SPREAD * 2;
    pos[o + 2] = -FIELD_DEPTH;
    posAttr.needsUpdate = true;
  };
  window.addEventListener("click", onClick);

  const pointer = { x: 0, y: 0 };
  const handlePointerMove = (event: PointerEvent) => {
    pointer.x = event.clientX / window.innerWidth - 0.5;
    pointer.y = event.clientY / window.innerHeight - 0.5;
  };
  window.addEventListener("pointermove", handlePointerMove);

  // A ResizeObserver (rather than window.resize) also fires on the initial
  // measurement, so the canvas still sizes correctly if it happens to mount
  // while the viewport/container is collapsed to 0×0.
  const handleResize = () => {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(mount);

  let frame = 0;
  let last = performance.now();

  const render = (now: number) => {
    // Clamp dt so a backgrounded tab doesn't teleport the whole field.
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;

    if (!reduced) {
      for (const cloud of clouds) {
        const attribute = cloud.geometry.attributes
          .position as ThreeType.BufferAttribute;
        const array = attribute.array as Float32Array;
        for (let i = 0; i < cloud.count; i++) {
          const z = i * 3 + 2;
          array[z] += SPEED * dt;
          // Once a star passes the camera, recycle it to the back of the slab.
          if (array[z] > 60) {
            array[z] = -FIELD_DEPTH;
            array[z - 2] = (Math.random() - 0.5) * FIELD_SPREAD * 2;
            array[z - 1] = (Math.random() - 0.5) * FIELD_SPREAD * 2;
          }
        }
        attribute.needsUpdate = true;
      }
    }

    // Drive any in-flight "caught star" sparks outward, fading each toward
    // black (invisible under additive blending) as its life runs out.
    // Frame-rate independent drag — velocity decays to ~25% over a second, so
    // the burst punches outward then eases to a stop. (A flat per-frame
    // multiply decayed ~40x faster at 60fps, which killed the expansion
    // almost immediately.)
    const damp = Math.pow(0.25, dt);

    let sparksLive = false;
    for (let i = 0; i < SPARK_POOL; i++) {
      if (sparkLife[i] <= 0) continue;
      sparksLive = true;
      const o = i * 3;
      sparkLife[i] -= dt / SPARK_LIFE;

      if (sparkLife[i] <= 0) {
        // Zero the colour *and* send it back to the parking spot, so a spent
        // spark isn't left sitting in the field being rasterized every frame
        // for the rest of the session.
        sparkCol[o] = sparkCol[o + 1] = sparkCol[o + 2] = 0;
        sparkPos[o] = 0;
        sparkPos[o + 1] = PARKED_Y;
        sparkPos[o + 2] = 0;
        continue;
      }

      sparkPos[o] += sparkVel[o] * dt;
      sparkPos[o + 1] += sparkVel[o + 1] * dt;
      sparkPos[o + 2] += sparkVel[o + 2] * dt;
      sparkVel[o] *= damp;
      sparkVel[o + 1] *= damp;
      sparkVel[o + 2] *= damp;

      const fade = sparkLife[i];
      sparkCol[o] = sparkTint[o] * fade;
      sparkCol[o + 1] = sparkTint[o + 1] * fade;
      sparkCol[o + 2] = sparkTint[o + 2] * fade;
    }
    if (sparksLive) {
      sparkGeometry.attributes.position.needsUpdate = true;
      sparkGeometry.attributes.color.needsUpdate = true;
    }

    // Ease the camera toward the cursor for parallax depth.
    camera.position.x += (pointer.x * PARALLAX - camera.position.x) * EASE;
    camera.position.y += (-pointer.y * PARALLAX - camera.position.y) * EASE;
    camera.lookAt(0, 0, -FIELD_DEPTH * 0.5);

    renderer.render(scene, camera);
    frame = requestAnimationFrame(render);
  };
  frame = requestAnimationFrame(render);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("click", onClick);
    resizeObserver.disconnect();
    for (const cloud of clouds) {
      cloud.geometry.dispose();
      cloud.material.dispose();
    }
    sparkGeometry.dispose();
    sparkMaterial.dispose();
    roundTexture.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode === mount) {
      mount.removeChild(renderer.domElement);
    }
  };
}
