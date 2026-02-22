import Inquiry from '../../components/Inquiry';
import { ImageGrid } from '../../components/ImageGrid';
import TopHeader from '../../components/TopHeader';
import TopIntroduction from '../../components/TopIntroduction';
import * as repositories from '../../src/repositories';
import { generateRandomImages } from '../../src/utils';
import { getDictionary } from './dictionaries';
import Link from 'next/link';
import { TLocale } from '../../src/entities';

export default async function HomePage(params: { lang: TLocale }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);
  const images = await repositories.fetchPortfolioImages();
  const urls = await generateRandomImages(images, 3);
  const description = await repositories.fetchDescriptions();

  const tempMediaImages = [
    'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.50.56.png?alt=media&token=f52baaf4-6710-4aa3-a16a-94e11c4f36d9?w=700&h=1000',
    'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.51.32.png?alt=media&token=ce54f899-10f8-4fd8-b7b1-20025f5bed71?w=700&h=1000',
    'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.53.07.png?alt=media&token=6888132e-76b1-4812-9c6f-89176fa206cb?w=700&h=1000',
  ];

  return (
    <main className="min-h-screen">
      <TopHeader i18n={dict['translation']} images={urls} />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <TopIntroduction
          description={description[0]}
          lang={locale}
          i18n={dict['translation']}
        />

        {/* Portfolio section */}
        <section className="mb-20 mt-24">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
              {dict['translation']['general']['portfolio']}
            </h2>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
            <ImageGrid images={urls} className="bg-neutral-900" />
          </div>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-2xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 hover:shadow-lg"
            >
              {dict['translation']['general']['see_portfolio']}
            </Link>
          </div>
        </section>

        {/* Media section */}
        <section className="mb-20 mt-4">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
              {dict['translation']['index']['about_media']}
            </h2>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
            <ImageGrid
              images={tempMediaImages}
              className="bg-neutral-900"
              height={400}
            />
          </div>
          <div className="text-center">
            <Link
              href="/service"
              locale={locale}
              className="inline-flex items-center rounded-2xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 hover:shadow-lg"
            >
              {dict['translation']['general']['view_service']}
            </Link>
          </div>
        </section>
      </div>

      <div
        className="relative flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[500px] lg:h-[600px]"
        style={{ backgroundImage: 'url(//www.inkimono.com/slider-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        {/* @ts-expect-error Server Component */}
        <Inquiry lang={params.lang} />
      </div>
    </main>
  );
}
