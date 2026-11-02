import { ArrowRight } from 'lucide-react';

export default function DownloadButton({ href, children }) {
  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn inline-flex items-center gap-2 bg-brand-orange px-5 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d63f14] hover:shadow-[0_10px_20px_rgba(240,75,29,0.35)] lg:px-6 lg:py-[15px] lg:text-[14px]"
    >
      {children}
      <ArrowRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </a>
  );
}
