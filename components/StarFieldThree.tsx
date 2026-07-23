"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";
import { getTheme, getServerTheme, subscribeTheme } from "@/lib/theme";

// Most stars are soft round dots; a sprinkle use the site's four-point
// sparkle mark so the field ties back to the hero flourishes.
const ROUND_COUNT = 2000;
const SPARKLE_COUNT = 130;
// Depth of the slab of space the stars occupy, in world units.
const FIELD_DEPTH = 900;
const FIELD_SPREAD = 700;
// How fast stars stream toward the camera (world units per second).
const SPEED = 26;
// How far the cursor pushes the camera, and how quickly it eases there.
const PARALLAX = 90;
const EASE = 0.045;

// Same path as components/Sparkle.tsx, in a 24×24 box.
const SPARKLE_PATH =
  "M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z";

function makeTexture(draw: (ctx: CanvasRenderingContext2D) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) draw(ctx);
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function StarFieldThree() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme !== "dark") return;
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      1,
      1,
      FIELD_DEPTH * 1.6,
    );
    camera.position.z = 0;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearAlpha(0);
    mount.appendChild(renderer.domElement);

    // Soft round dot.
    const roundTexture = makeTexture((ctx) => {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.3, "rgba(255,255,255,0.7)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    });

    // Four-point sparkle, with a soft glow so it doesn't look like a decal.
    const sparkleTexture = makeTexture((ctx) => {
      ctx.scale(64 / 24, 64 / 24);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "rgba(255,255,255,0.9)";
      ctx.shadowBlur = 4;
      ctx.fill(new Path2D(SPARKLE_PATH));
    });

    // Builds one cloud of points scattered through the slab of space.
    const createCloud = (
      count: number,
      texture: THREE.Texture,
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

        // Mostly white, occasionally a cool blue or mint cast.
        const roll = Math.random();
        if (roll > 0.92) tint.setHSL(0.45, 0.5, 0.8);
        else if (roll > 0.84) tint.setHSL(0.6, 0.4, 0.82);
        else tint.setHSL(0, 0, 0.75 + Math.random() * 0.25);
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
        blending: THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);
      return { geometry, material, count };
    };

    const clouds = [
      createCloud(ROUND_COUNT, roundTexture, 4.5),
      createCloud(SPARKLE_COUNT, sparkleTexture, 13),
    ];

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
            .position as THREE.BufferAttribute;
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
      sparkleTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
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
