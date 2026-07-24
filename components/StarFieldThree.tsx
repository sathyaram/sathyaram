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

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearAlpha(0);
  // three.js is loaded async, so the canvas would otherwise pop in with no
  // warning. Start it transparent and ease it up once it's mounted, so the
  // field fades in gracefully instead of appearing out of nowhere.
  const canvas = renderer.domElement;
  canvas.style.opacity = "0";
  canvas.style.transition = "opacity 1200ms ease";
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
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    return { geometry, material, count };
  };

  const clouds = [createCloud(STAR_COUNT, roundTexture, 4.5)];

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
    resizeObserver.disconnect();
    for (const cloud of clouds) {
      cloud.geometry.dispose();
      cloud.material.dispose();
    }
    roundTexture.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode === mount) {
      mount.removeChild(renderer.domElement);
    }
  };
}
