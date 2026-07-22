export default function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden dark:hidden"
    >
      <div className="absolute left-1/2 top-[-220px] h-[720px] w-[920px] -translate-x-1/2">
        <div
          className="h-full w-full animate-[gradient-swirl_20s_ease-in-out_infinite] rounded-full opacity-75 blur-2xl motion-reduce:animate-none"
          style={{
            background:
              "conic-gradient(from 0deg, #93b8f2, #c9a9e0, #f2b880, #8fd9c4, #93b8f2)",
          }}
        />
      </div>
    </div>
  );
}
