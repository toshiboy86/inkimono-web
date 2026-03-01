import { TI18n } from '../src/entities';
import AwardBadge from './ui/AwardBadge';

const TopHeader = (props: { i18n: TI18n; images?: string[] }) => {
  const { i18n, images = [] } = props;

  // Use provided images or fall back to placeholders
  // TODO: The fallback placeholders below can be removed once real images are always passed
  const [img1, img2, img3] =
    images.length >= 3
      ? images
      : [
          'https://picsum.photos/seed/inkimono-home1/720/960',
          'https://picsum.photos/seed/inkimono-home2/720/470',
          'https://picsum.photos/seed/inkimono-home3/720/470',
        ];

  return (
    <section className="overflow-hidden bg-neutral-950">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 py-20 md:px-16 md:py-28">
          <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400">
            <span className="h-px w-8 bg-accent-500" />
            Tokyo · Asakusa
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
            {i18n['index']['top_title']}
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-neutral-400">
            {i18n['index']['about_me_1']}
          </p>
        </div>

        {/* Right: photo mosaic — desktop grid */}
        <div className="relative hidden h-[540px] gap-2 p-4 md:grid md:grid-cols-2 md:grid-rows-2">
          {/* Tall left photo spans both rows */}
          <div className="row-span-2 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img1}
              alt="Kimono portrait"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Top-right */}
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img2}
              alt="Kimono detail"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Bottom-right */}
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img3}
              alt="Location shoot"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Mobile: horizontal scroll strip */}
        <div className="flex gap-3 overflow-x-auto px-4 pb-6 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img1}
            alt="Kimono portrait"
            className="h-48 w-36 flex-shrink-0 rounded-2xl object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img2}
            alt="Kimono detail"
            className="h-48 w-48 flex-shrink-0 rounded-2xl object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img3}
            alt="Location shoot"
            className="h-48 w-48 flex-shrink-0 rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Award badges */}
      <div className="mx-auto max-w-screen-xl px-8 pb-12">
        <div className="flex flex-wrap justify-center gap-5">
          <AwardBadge title="Best LGBTQ+ Travel" subtitle="Japan Travel Awards 2026" />
          <AwardBadge title="Best Accessible Travel" subtitle="Japan Travel Awards 2026" />
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
