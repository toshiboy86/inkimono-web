import { Trophy, Newspaper, Camera, BookOpen, Radio } from 'lucide-react';
import { getDictionary } from '../dictionaries';
import { TLocale } from '../../../src/entities';

// ─── Photo placeholders ──────────────────────────────────────────────────────
// TODO: Replace each URL with your actual photo. Seeds are stable so the same
// placeholder will always render until you swap the URL.

/** Three hero panel photos (tall-left + two stacked-right) */
const HERO_PHOTOS = [
  'https://picsum.photos/seed/inkimono-h1/720/960', // TODO: portrait / kimono shot
  'https://picsum.photos/seed/inkimono-h2/720/470', // TODO: detail / texture shot
  'https://picsum.photos/seed/inkimono-h3/720/470', // TODO: location / street shot
] as const;

/** Award card side photo */
const AWARD_PHOTO = 'https://picsum.photos/seed/inkimono-award/640/480'; // TODO: award ceremony / kimono portrait

/** Horizontal gallery strip (5 photos) */
const GALLERY_PHOTOS = [
  'https://picsum.photos/seed/inkimono-g1/380/520', // TODO
  'https://picsum.photos/seed/inkimono-g2/380/520', // TODO
  'https://picsum.photos/seed/inkimono-g3/380/520', // TODO
  'https://picsum.photos/seed/inkimono-g4/380/520', // TODO
  'https://picsum.photos/seed/inkimono-g5/380/520', // TODO
] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

type MediaItem = {
  key: string;
  category: string;
  // biome-ignore lint: lucide icon type
  icon: React.ElementType;
  org: string;
  photo: string;
};

const mediaItems: MediaItem[] = [
  {
    key: 'content-2', category: 'Press',     icon: Newspaper, org: 'The Japan Times',
    photo: 'https://picsum.photos/seed/inkimono-press1/800/480', // TODO
  },
  {
    key: 'content-3', category: 'Press',     icon: Newspaper, org: 'Reuters',
    photo: 'https://picsum.photos/seed/inkimono-press2/800/480', // TODO
  },
  {
    key: 'content-4', category: 'Project',   icon: Camera,    org: 'Kirin Australia',
    photo: 'https://picsum.photos/seed/inkimono-proj1/560/400', // TODO
  },
  {
    key: 'content-5', category: 'Project',   icon: Camera,    org: 'Girl Gaze',
    photo: 'https://picsum.photos/seed/inkimono-proj2/560/400', // TODO
  },
  {
    key: 'content-6', category: 'Magazine',  icon: BookOpen,  org: 'Tokyo Weekender',
    photo: 'https://picsum.photos/seed/inkimono-mag/560/400',   // TODO
  },
  {
    key: 'content-7', category: 'Broadcast', icon: Radio,     org: 'Poland',
    photo: 'https://picsum.photos/seed/inkimono-tv/560/400',    // TODO
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default async function MediaPage(params: { lang: TLocale }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);
  const m = dict['translation']['media'];
  const isJa = locale === 'ja';

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="overflow-hidden bg-neutral-950">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2">

          {/* Left: text panel */}
          <div className="flex flex-col justify-center px-8 py-20 md:px-16 md:py-28">
            <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400">
              <span className="h-px w-8 bg-accent-500" />
              Recognition
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
              {isJa ? 'メディア & 受賞' : 'Media & Recognition'}
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-neutral-400">
              {dict['translation']['index']['about_me_5']}
            </p>
          </div>

          {/* Right: photo mosaic (hidden on mobile) */}
          <div className="relative hidden h-[540px] gap-2 p-4 md:grid md:grid-cols-2 md:grid-rows-2">
            {/* Tall left photo spans both rows */}
            <div className="row-span-2 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_PHOTOS[0]}
                alt="Kimono portrait"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Top-right */}
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_PHOTOS[1]}
                alt="Kimono detail"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Bottom-right */}
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_PHOTOS[2]}
                alt="Location shoot"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8">
          {[
            { n: '1', label: isJa ? '国際受賞' : 'International Award' },
            { n: '2', label: isJa ? '大手プレス' : 'Major Press' },
            { n: '4', label: isJa ? 'メディア出演' : 'Media Projects' },
            { n: '7', label: isJa ? 'メディア掲載合計' : 'Total Features' },
          ].map(({ n, label }, i, arr) => (
            <div key={label} className="flex items-center gap-10">
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tight text-accent-500">{n}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  {label}
                </p>
              </div>
              {i < arr.length - 1 && <div className="h-8 w-px bg-neutral-200" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* ── Featured Award ── */}
        <div className="relative mb-16 overflow-hidden rounded-3xl bg-neutral-900">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-accent-500/5 blur-3xl" />
          {/* accent left bar */}
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-accent-400 via-accent-500 to-accent-600" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">
            {/* Text */}
            <div className="relative px-10 py-12 md:px-16 md:py-14">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/20">
                  <Trophy size={18} className="text-accent-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-400">
                  {isJa ? '受賞' : 'Award'}
                </span>
              </div>
              <p className="mb-4 text-xl font-semibold leading-relaxed text-white md:text-2xl">
                {m['content-1']}
              </p>
              <p className="text-sm text-neutral-500">International Life Culture Crafts Association</p>
            </div>

            {/* Photo — hidden on mobile */}
            <div className="hidden overflow-hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={AWARD_PHOTO}
                alt="Award ceremony"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Section heading ── */}
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
            {isJa ? 'プレス・メディア出演' : 'Press & Appearances'}
          </h2>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* ── Press cards — photo header with gradient overlay ── */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {mediaItems.slice(0, 2).map(({ key, category, icon: Icon, org, photo }) => (
            <div
              key={key}
              className="group overflow-hidden rounded-2xl bg-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Photo with gradient */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt={org}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                  <Icon size={10} />
                  {category}
                </span>
              </div>
              {/* Text */}
              <div className="px-6 py-5">
                <p className="mb-2 text-xs font-semibold tracking-wide text-accent-400">{org}</p>
                <p className="text-sm leading-relaxed text-neutral-300">{m[key as keyof typeof m]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Gallery strip ── */}
        <div className="-mx-6 mb-16 overflow-x-auto px-6">
          <div className="flex w-max gap-3 pb-2">
            {GALLERY_PHOTOS.map((src, i) => (
              <div key={i} className="h-60 w-44 shrink-0 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Secondary items — horizontal thumbnail cards ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mediaItems.slice(2).map(({ key, category, icon: Icon, org, photo }) => (
            <div
              key={key}
              className="group flex overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Square thumbnail */}
              <div className="w-28 shrink-0 overflow-hidden sm:w-32">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt={org}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center px-5 py-4">
                <span className="mb-1 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  <Icon size={9} />
                  {category}
                </span>
                <p className="text-sm font-semibold text-neutral-800">{org}</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">{m[key as keyof typeof m]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Pull quote ── */}
        <figure className="mt-16 border-l-4 border-accent-500 pl-6">
          <blockquote className="text-base italic leading-relaxed text-neutral-600">
            &ldquo;{dict['translation']['index']['about_me_5']}&rdquo;
          </blockquote>
        </figure>

      </div>
    </main>
  );
}
