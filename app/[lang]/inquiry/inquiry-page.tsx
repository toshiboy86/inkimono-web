'use client';
import { Mail, Copy } from 'lucide-react';
import { TLocale } from '../../../src/entities';

const email = 'inkimono.com@gmail.com';

export default function InquiryPage(params: { lang: TLocale }) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="mb-6 flex justify-center">
            <Mail size={48} className="text-accent-500" />
          </div>
          <p className="mb-3 text-sm text-neutral-600">
            Please send your inquiry to
          </p>
          <p className="mb-4 text-2xl font-semibold text-neutral-700">{email}</p>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(email)}
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-200"
          >
            <Copy size={16} />
            Copy
          </button>
          <p className="mb-2 text-sm leading-relaxed text-neutral-600">
            Please include the preferred time and dates and the number of
            participants.
          </p>
          <p className="text-sm leading-relaxed text-neutral-600">
            (ご希望のお時間、日付、人数をお伝えください)
          </p>
        </div>
      </div>
    </main>
  );
}
