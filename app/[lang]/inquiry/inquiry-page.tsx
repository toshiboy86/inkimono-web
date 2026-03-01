'use client';
import { useState } from 'react';
import { Mail, Copy, CheckCheck, MessageSquare } from 'lucide-react';
import { TLocale } from '../../../src/entities';

const email = 'inkimono.com@gmail.com';

export default function InquiryPage(params: { lang: TLocale }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-neutral-950 px-8 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent-400/5 blur-3xl" />
        <div className="relative mx-auto max-w-screen-xl">
          <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400">
            <span className="h-px w-8 bg-accent-500" />
            Contact
          </span>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
            Get In Touch
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400">
            {"I'd love to hear about your kimono experience plans. Feel free to reach out with any questions."}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-screen-xl px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Email card */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
              <Mail size={22} className="text-accent-500" />
            </div>
            <h2 className="mb-1 text-lg font-semibold text-neutral-800">Email</h2>
            <p className="mb-5 text-sm text-neutral-500">Send your inquiry directly</p>
            <p className="mb-5 break-all text-xl font-semibold text-neutral-800">{email}</p>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-medium text-neutral-600 transition-all hover:border-neutral-300 hover:bg-neutral-100"
            >
              {copied ? (
                <CheckCheck size={15} className="text-green-500" />
              ) : (
                <Copy size={15} />
              )}
              {copied ? 'Copied!' : 'Copy email address'}
            </button>
          </div>

          {/* What to include card */}
          <div className="relative overflow-hidden rounded-2xl bg-neutral-950 p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-accent-400 to-accent-600" />
            <div className="relative">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/20">
                <MessageSquare size={18} className="text-accent-400" />
              </div>
              <h2 className="mb-5 text-lg font-semibold text-white">What to include</h2>
              <ul className="space-y-3">
                {[
                  'Preferred date(s) and time',
                  'Number of participants',
                  'Any special requests or style preferences',
                  'Questions about kimono or the experience',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-neutral-500">
                ご希望のお時間、日付、人数をお伝えください
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
