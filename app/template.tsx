export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-[route-fade-in_400ms_ease-out] motion-reduce:animate-none">
      {children}
    </div>
  );
}
