import { CONFIG } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-border py-[30px] text-center text-faint text-[0.8rem] font-mono relative z-[1]">
      <div className="max-w-[900px] mx-auto px-6">
        <span dangerouslySetInnerHTML={{ __html: CONFIG.footerText }} />
      </div>
    </footer>
  );
}
