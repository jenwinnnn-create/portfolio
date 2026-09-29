import { CONFIG } from "../config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-7">
      {/* Paragraphs (HTML from config is intentional — it's your own content) */}
      <Reveal>
        <div>
          {CONFIG.aboutParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-muted mb-4 [&_strong]:text-text [&_a]:font-semibold"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>
      </Reveal>

      {/* whoami.json terminal card */}
      <Reveal delay={100}>
        <div className="card overflow-hidden shadow-[var(--shadow)]">
          <div className="flex items-center gap-2 px-4 py-3 bg-bg-soft border-b border-border">
            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-faint">whoami.json</span>
          </div>
          <div className="px-5 py-[18px] font-mono text-[0.82rem] leading-[1.9]">
            <div className="flex gap-2.5">
              <span className="text-accent select-none">$</span>
              <span>cat whoami.json</span>
            </div>
            {Object.entries(CONFIG.terminal).map(([k, v]) => (
              <div key={k} className="text-muted pl-[18px]">
                "<span className="text-accent2">{k}</span>": "{v}"
              </div>
            ))}
            <div className="flex gap-2.5">
              <span className="text-accent select-none">$</span>
              <span>▊</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
