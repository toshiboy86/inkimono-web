import type { FC } from 'react';

const TopImage: FC<{ title: string; subtitle?: string; tag?: string }> = ({
  title,
  subtitle,
  tag,
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(//www.inkimono.com/slider-bg.jpg)' }}
      />
      {/* Dark gradient: opaque on left, transparent on right so photo shows */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />

      <div className="relative z-10 mx-auto min-h-[360px] max-w-screen-xl px-8 py-20 md:py-28">
        {tag && (
          <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400">
            <span className="h-px w-8 bg-accent-500" />
            {tag}
          </span>
        )}
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default TopImage;
