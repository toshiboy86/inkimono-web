import { ModalImageGrid } from '../../../components/ImageGrid';
import TopImage from '../../../components/TopImage';
import { TLocale } from '../../../src/entities';
import { fetchPortfolioImages } from '../../../src/repositories';
import { getDictionary } from '../dictionaries';

export default async function PortfolioPage(params: { lang: TLocale }) {
  const urls = await fetchPortfolioImages();
  const dict = await getDictionary(params.lang);

  return (
    <main className="min-h-screen bg-white">
      <TopImage
        title="Portfolio"
        tag="Photography"
        subtitle="Explore our collection of professional kimono styling and portrait photography."
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
            My Work
          </h2>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
          <ModalImageGrid images={urls} className="bg-neutral-900" />
        </div>
      </div>
    </main>
  );
}
