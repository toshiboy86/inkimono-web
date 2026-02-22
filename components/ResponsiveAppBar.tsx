'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import InstagramButton from './ui/InstagramButton';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet';
import { convertFirstLetterCapital, getNextLocale } from '../src/utils';
import { TLocale } from '../src/entities';

const pages = [
  { link: 'redirect', text: 'home' },
  { link: 'service', text: 'Plans & Pricing' },
  { link: 'portfolio', text: 'portfolio' },
  { link: 'workshop', text: 'workshop' },
  { link: 'location', text: 'location' },
  { link: 'inquiry', text: 'inquiry' },
  { link: 'faq', text: 'faq' },
  { link: 'media', text: 'media' },
];

export default function ResponsiveAppBar(params: { lang: TLocale }) {
  const { lang } = params;
  const [open, setOpen] = React.useState(false);
  const nextLocale = getNextLocale(lang, usePathname());

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="redirect"
          locale={lang}
          className="text-xl font-semibold tracking-[-0.025em] text-neutral-700"
        >
          InKimono
        </Link>

        {/* Desktop nav */}
        <nav data-testid="main-nav" className="hidden items-center gap-1 md:flex">
          {pages.map((page) => (
            <Link
              key={page.text}
              href={page.link}
              locale={lang}
              className="rounded-2xl px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-accent-500"
            >
              {convertFirstLetterCapital(page.text)}
            </Link>
          ))}
          <Link
            href={nextLocale.path}
            className="ml-1 rounded-2xl bg-accent-500 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 hover:-translate-y-px"
          >
            {convertFirstLetterCapital(nextLocale.value)}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <InstagramButton />

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 pt-8">
              <nav className="flex flex-col gap-1">
                {pages.map((page) => (
                  <Link
                    key={page.text}
                    href={page.link}
                    locale={lang}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-accent-500"
                  >
                    {convertFirstLetterCapital(page.text)}
                  </Link>
                ))}
                <Link
                  href={nextLocale.path}
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
                >
                  {convertFirstLetterCapital(nextLocale.value)}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
