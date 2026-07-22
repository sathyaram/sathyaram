function mulberry32(seed: number) {
  return function random() {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStars(count: number, seed: number) {
  const random = mulberry32(seed);
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = (random() * 100).toFixed(2);
    const y = (random() * 100).toFixed(2);
    shadows.push(`${x}vw ${y}vh #fff`);
  }
  return shadows.join(", ");
}

const smallStars = generateStars(140, 1);
const bigStars = generateStars(50, 2);

export default function StarField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block"
    >
      <div
        className="absolute h-[1px] w-[1px] animate-[star-twinkle_5s_ease-in-out_infinite] rounded-full bg-white motion-reduce:animate-none"
        style={{ boxShadow: smallStars }}
      />
      <div
        className="absolute h-[2px] w-[2px] animate-[star-twinkle_7s_ease-in-out_infinite] rounded-full bg-white motion-reduce:animate-none"
        style={{ boxShadow: bigStars, animationDelay: "2s" }}
      />
    </div>
  );
}
