import { Award } from 'lucide-react';

export default function AwardBadge({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-[oklch(45%_0.07_75)] bg-[oklch(20%_0.015_75)] px-6 py-4 transition-colors hover:border-[oklch(65%_0.12_75)]">
      <div className="shrink-0 rounded-full bg-[oklch(75%_0.15_75)]/10 p-2">
        <Award size={28} className="text-[oklch(75%_0.15_75)]" />
      </div>
      <div>
        <p className="text-base font-semibold text-white">{title}</p>
        <p className="text-sm text-[oklch(65%_0.06_75)]">{subtitle}</p>
      </div>
    </div>
  );
}
