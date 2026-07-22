export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-foreground">Sathya Ram</p>
        <p>&copy; {new Date().getFullYear()} — Websites, design, and photography.</p>
      </div>
    </footer>
  );
}
