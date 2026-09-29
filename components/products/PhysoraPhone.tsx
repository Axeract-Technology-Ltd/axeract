import Image from "next/image";
import { PHYSORA } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const RING = 2 * Math.PI * 34;
// an illustrative workout screen; the app is in development, so this is a preview, not a feature list
const ROWS = [
  { w: "78%", done: true },
  { w: "64%", done: true },
  { w: "70%", done: false },
];

export function PhysoraPhone({ className }: { className?: string }) {
  return (
    <div className={cn("w-[210px] shrink-0 rounded-[28px] border border-white/15 bg-[#0b0c16] p-2 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.65)] sm:w-[236px]", className)} aria-hidden>
      <div className="flex h-[400px] flex-col rounded-[22px] bg-[#11121f] p-4 text-white">
        <span className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Image src={PHYSORA.logo.src} alt="" width={18} height={22} className="h-[22px] w-auto" />
            <span className="text-[12px] font-medium tracking-[-0.01em]">Physora</span>
          </span>
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-[8.5px] uppercase tracking-[0.14em] text-white/60">Preview</span>
        </span>

        <div className="mt-6 flex items-center gap-4">
          <svg viewBox="0 0 80 80" className="h-[76px] w-[76px] -rotate-90">
            <defs>
              <linearGradient id="phys-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#9eeaf0" />
                <stop offset=".5" stopColor="#7fb4f5" />
                <stop offset="1" stopColor="#6a5cf0" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
            <circle cx="40" cy="40" r="34" fill="none" stroke="url(#phys-ring)" strokeWidth="7" strokeLinecap="round" strokeDasharray={RING.toFixed(1)} strokeDashoffset={(RING * 0.32).toFixed(1)} />
          </svg>
          <span className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-[0.14em] text-white/50">Today</span>
            <span className="font-display text-[20px] leading-none">Upper body</span>
            <span className="h-1.5 w-16 rounded-full bg-white/10" />
          </span>
        </div>

        <div className="mt-6 flex flex-1 flex-col gap-2.5">
          {ROWS.map((r, i) => (
            <span key={i} className="flex items-center gap-3 rounded-[12px] bg-white/[0.05] px-3 py-2.5">
              <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full", r.done ? "bg-physora" : "border border-white/20")}>
                {r.done && (
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#0b0c16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 6.2 5 8.5 9.5 3.5" />
                  </svg>
                )}
              </span>
              <span className="flex flex-1 flex-col gap-1.5">
                <span className="h-1.5 rounded-full bg-white/60" style={{ width: r.w }} />
                <span className="h-1.5 w-1/3 rounded-full bg-white/15" />
              </span>
            </span>
          ))}
        </div>

        <span className="bg-physora mt-4 grid h-10 place-items-center rounded-full text-[12px] font-semibold text-[#0b0c16]">Start workout</span>
      </div>
    </div>
  );
}
