export type Token = { text: string; type?: "keyword" | "tag" | "attr" | "string" | "comment" | "value" };
export type CodeLine = Token[];

type CodeBlockProps = {
  filename: string;
  lines: CodeLine[];
};

const tokenColor: Record<NonNullable<Token["type"]>, string> = {
  keyword: "text-[#c586c0]",
  tag: "text-[#569cd6]",
  attr: "text-[#9cdcfe]",
  string: "text-[#ce9178]",
  value: "text-[#b5cea8]",
  comment: "text-[#6a9955]",
};

/**
 * A fabricated-but-plausible "code screenshot" — a real syntax-highlighted
 * block, not an image, so it stays crisp and theme-aware. Standing in for
 * an actual screenshot of the work, per project.
 */
export default function CodeBlock({ filename, lines }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e] shadow-lg">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-white/50">{filename}</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 text-[13px] leading-relaxed">
        <code className="font-mono">
          {lines.map((line, i) => (
            <div key={i}>
              {line.length === 0 ? (
                <>&nbsp;</>
              ) : (
                line.map((token, j) => (
                  <span key={j} className={token.type ? tokenColor[token.type] : "text-white/70"}>
                    {token.text}
                  </span>
                ))
              )}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
