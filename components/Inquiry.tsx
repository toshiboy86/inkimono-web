import Link from 'next/link';
import { getDictionary } from '../app/[lang]/dictionaries';
import { TLocale } from '../src/entities';

const Inquiry = async (params: { lang: TLocale }) => {
  const dict = await getDictionary(params.lang);
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-[600px] text-center text-white">
        <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl md:p-12">
          <h4 className="mb-6 font-semibold text-[1.5rem] leading-[1.3] tracking-[-0.025em] md:text-[2rem]">
            {dict['translation']['general']['inquiry']}
          </h4>
          <p className="mb-8 text-base leading-relaxed opacity-90">
            {dict['translation']['index']['inquiry_body_1']}
            {dict['translation']['index']['inquiry_body_2']}
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center rounded-2xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 hover:shadow-lg"
          >
            {dict['translation']['general']['inquiry']}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
