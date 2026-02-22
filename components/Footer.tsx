import InstagramButton from './ui/InstagramButton';
import Link from 'next/link';
import { TLocale } from '../src/entities';

const footerLinks = [
  { href: '/', label: 'About Me' },
  { href: '/service', label: 'Plans & Pricing' },
  { href: '/inquiry', label: 'Contact Me' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/location', label: 'Location' },
  { href: '/faq', label: 'FAQ' },
];

export default function Footer(params: { lang: TLocale }) {
  const lang = params.lang;
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-100 px-6 py-16 text-center">
      <div className="mb-8 flex flex-wrap justify-center gap-6 sm:gap-8">
        {footerLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            locale={lang}
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-accent-500"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="mb-6 flex justify-center">
        <InstagramButton />
      </div>
      <p className="text-sm text-neutral-500">
        Copyright © Design &amp; Developed by InKimono. All rights reserved.
      </p>
    </footer>
  );
}
