'use client';

import InstagramIcon from './InstagramIcon';

const INSTAGRAM_URL = 'https://www.instagram.com/inkimono';

export default function InstagramButton({ className }: { className?: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className={`inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${className ?? ''}`}
    >
      <InstagramIcon />
    </a>
  );
}
