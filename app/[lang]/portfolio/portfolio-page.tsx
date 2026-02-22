import { ModalImageGrid } from '../../../components/ImageGrid';
import TopImage from '../../../components/TopImage';
import { TLocale } from '../../../src/entities';
import { fetchPortfolioImages } from '../../../src/repositories';
import { getDictionary } from '../dictionaries';

export default async function PortfolioPage(params: { lang: TLocale }) {
  const urls = await fetchPortfolioImages();
  const dict = await getDictionary(params.lang);

  return (
    <main className="min-h-screen">
      <TopImage title="Portfolio" />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-16 text-center">
          <h4 className="mb-6 font-semibold text-[1.5rem] leading-[1.3] tracking-[-0.025em] text-neutral-700 md:text-[2rem]">
            My Work
          </h4>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-neutral-600">
            Explore our collection of professional photography and styling work.
            Each image tells a story of elegance, tradition, and modern
            sophistication.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
          <ModalImageGrid images={urls} className="bg-neutral-900" />
        </div>
      </div>
    </main>
  );
}
