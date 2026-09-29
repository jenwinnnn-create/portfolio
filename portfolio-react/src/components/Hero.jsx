import { useRef } from "react";
import { CONFIG } from "../config";
import { Icon } from "../icons";
import { useScramble } from "../hooks/useScramble";
import { useTyping } from "../hooks/useTyping";

export default function Hero() {
  const { chars, replay } = useScramble(CONFIG.name, 400);
  const typed = useTyping(CONFIG.roles);
  const glowRef = useRef(null);

  /* The ambient glow leans gently toward the cursor */
  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${x * 70}px, ${y * 46}px)`;
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={onMouseMove}
      className="min-h-screen flex items-center pt-[110px] pb-[60px] relative"
    >
      <div ref={glowRef} className="hero-glow" />
      <div className="relative">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-wide text-accent bg-[var(--accent-soft)] border border-accent/40 px-3.5 py-[5px] rounded-full mb-7">
          <span className="w-[6px] h-[6px] rounded-full bg-accent animate-[pulse-dot_2s_ease-in-out_infinite]" />
          {CONFIG.status}
        </div>

        <p className="font-mono text-muted text-[0.9rem] mb-3">
          <span className="text-accent2">$</span> kamusta, I am
        </p>

        {/* Scramble-decrypted name — hover to re-scramble (like the inspo site!) */}
        <h1
          onMouseEnter={replay}
          title="hey."
          className="font-sans font-extrabold tracking-[-0.035em] leading-[1.02]
            text-[clamp(2.8rem,10vw,5rem)] mb-4 min-h-[1.05em] cursor-default select-none"
        >
          {chars.map((c, i) =>
            c.glitch ? (
              <span key={i} className="text-accent">
                {c.ch}
              </span>
            ) : (
              <span key={i}>{c.ch}</span>
            )
          )}
        </h1>

        {/* Typewriter roles */}
        <div className="font-mono text-[clamp(1.05rem,3.5vw,1.45rem)] text-muted mb-[22px] min-h-[1.5em]">
          <span className="text-accent">{typed}</span>
          <span className="inline-block w-[9px] h-[1.05em] bg-accent align-[text-bottom] ml-[3px] animate-[blink_1s_step-end_infinite]" />
        </div>

        <p className="text-muted max-w-[540px] mb-10 text-[1rem] leading-[1.75]">
          {CONFIG.heroDescription}
        </p>

        <div className="flex gap-3.5 flex-wrap items-center">
          <a href="#about" className="btn btn-primary">
            $ about_me
          </a>
          <a href="#contact" className="btn btn-outline">
            $ get_in_touch
          </a>
        </div>

        {/* Social icons — only renders when you add socials in config.js */}
        {CONFIG.socials.length > 0 && (
          <div className="flex gap-2 mt-12">
            {CONFIG.socials.slice(0, 5).map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                title={s.label}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-[10px]
                  border border-border bg-card text-muted transition-all duration-300
                  hover:text-accent hover:border-accent hover:-translate-y-1
                  hover:shadow-[0_8px_20px_var(--accent-glow)] hover:no-underline"
              >
                <Icon name={s.icon} className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
