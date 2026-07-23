// Four blurred blobs drifting on independent loops, inspired by the moving
// mesh gradient on seanhalpin.xyz — the overlap and differing timings are
// what read as one soft gradient breathing, rather than a single shape
// spinning in place.
const blobs = [
  {
    color: "#93b8f2",
    className: "-left-[12%] top-[-260px] h-[620px] w-[620px]",
    animation: "animate-[blob-drift-a_26s_ease-in-out_infinite]",
  },
  {
    color: "#f2b880",
    className: "left-[36%] top-[-300px] h-[680px] w-[680px]",
    animation: "animate-[blob-drift-b_32s_ease-in-out_infinite]",
  },
  {
    color: "#8fd9c4",
    className: "right-[-10%] top-[-220px] h-[600px] w-[600px]",
    animation: "animate-[blob-drift-c_22s_ease-in-out_infinite]",
  },
  {
    color: "#c9a9e0",
    className: "left-[18%] top-[40px] h-[520px] w-[520px]",
    animation: "animate-[blob-drift-b_29s_ease-in-out_infinite_reverse]",
  },
];

export default function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden dark:hidden"
    >
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute rounded-full opacity-40 blur-3xl motion-reduce:animate-none ${blob.animation} ${blob.className}`}
          style={{ background: blob.color }}
        />
      ))}
    </div>
  );
}
