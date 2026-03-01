import Image from 'next/image';
import Inquiry from '../../../components/Inquiry';
import * as repositories from '../../../src/repositories';
import { getDictionary } from '../dictionaries';
import Link from 'next/link';
import { TLocale } from '../../../src/entities';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Article from '../../../components/Typography/Article';
import TopImage from '../../../components/TopImage';
import { fetchPortfolioImagesById2 } from '../../../src/repositories';
import { DEFAULT_IMAGE } from '../../../src/const';

export default async function WorkshopPage(params: { lang: TLocale }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);
  const [workshop] = await repositories.fetchPageByPageType('workshop');

  const mainDescription = workshop.fields[`description_${locale}_1`];
  const mainDescTitle = workshop.fields[`desc_title_${locale}_1`];
  const mainDescImage = workshop.fields.image_1;

  const images = mainDescImage?.sys.id
    ? await fetchPortfolioImagesById2(mainDescImage?.sys.id as string)
    : null;

  const second_images = workshop.fields.image_2?.sys.id
    ? await fetchPortfolioImagesById2(workshop.fields.image_2?.sys.id as string)
    : null;

  return (
    <main className="min-h-screen bg-white">
      <TopImage
        title="Workshop"
        tag="Learn"
        subtitle="Join our kimono styling workshop and discover the art of traditional Japanese dress."
      />

      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Article section */}
        <div className="mb-16">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
              About the Workshop
            </h2>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <Article
            imageSrc={images ? Object.values(images)[0] : DEFAULT_IMAGE}
            imageAlt="Stasia for the workshop"
          >
            <h2 className="mb-6 font-semibold text-[1.875rem] leading-[1.3] tracking-[-0.025em] text-neutral-700 md:text-[2.25rem]">
              {mainDescTitle}
            </h2>
            <div className="pt-2">
              <div className="text-base leading-relaxed text-neutral-600 [&_p]:mb-4">
                {mainDescription && documentToReactComponents(mainDescription)}
              </div>
            </div>
          </Article>
        </div>

        {/* Pricing section */}
        <section className="mb-16">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
              Workshop Pricing
            </h2>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <div className="mx-auto max-w-[600px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              unoptimized
              src={
                second_images
                  ? `${Object.values(second_images)[0]}?w=700&h=1000&q=75`
                  : DEFAULT_IMAGE
              }
              alt="Workshop price"
              width={700}
              height={1000}
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        </section>

        {/* CTA block */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 p-8 text-center md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-accent-400/5 blur-3xl" />
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-accent-400 via-accent-500 to-accent-600" />
          <div className="relative">
            <span className="mb-4 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400">
              <span className="h-px w-6 bg-accent-500" />
              {dict['translation']['general']['inquiry']}
            </span>
            <h4 className="mb-8 font-semibold text-[1.5rem] leading-[1.3] tracking-[-0.025em] text-white md:text-[2rem]">
              Ready to Join a Workshop?
            </h4>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://inkimono.as.me/schedule/fdfa7192/?appointmentTypeIds[]=72094965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 hover:shadow-lg"
              >
                {dict['translation']['general']['check_schedule']}
              </Link>
              <span className="text-sm font-medium text-neutral-600">or</span>
              <Link
                href="/inquiry"
                className="inline-flex items-center rounded-2xl border border-accent-500/50 px-6 py-3 text-sm font-semibold text-accent-400 transition-all duration-200 hover:-translate-y-px hover:border-accent-500 hover:bg-accent-500/10"
              >
                {dict['translation']['general']['dm']}
              </Link>
            </div>
          </div>
        </div>
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
