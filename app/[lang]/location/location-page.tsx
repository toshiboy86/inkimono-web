import TopImage from '../../../components/TopImage';
import { TLocale } from '../../../src/entities';
import {
  fetchLocations,
  fetchLocation,
  fetchPortfolioImagesById,
} from '../../../src/repositories';
import LocationCard from '../../../components/LocationCard';
import { getWordsOnLocale } from '../../../src/utils';

export default async function LocationPage(params: { lang: TLocale }) {
  const locale = params.lang;
  const locations = await fetchLocations();
  const location = await fetchLocation();
  const images = await fetchPortfolioImagesById();

  return (
    <main className="min-h-screen">
      <TopImage title="Location" />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-16 text-center">
          <h4 className="mb-6 font-semibold text-[1.5rem] leading-[1.3] tracking-[-0.025em] text-neutral-700 md:text-[2rem]">
            Studio Locations
          </h4>
          <p className="mx-auto max-w-[800px] text-base leading-relaxed text-neutral-600">
            {getWordsOnLocale(location[0].fields, 'description', locale)
              .content.map((f: any) =>
                f.content.map((e: any) => e.value).map((e: any) => e)
              )
              .join('')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {locations.map((loc: any) => (
            <LocationCard
              key={loc.sys.id}
              images={images}
              location={loc}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
