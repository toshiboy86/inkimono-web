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

  const locationDescription = getWordsOnLocale(location[0].fields, 'description', locale)
    .content.map((f: any) =>
      f.content.map((e: any) => e.value).map((e: any) => e)
    )
    .join('');

  return (
    <main className="min-h-screen bg-white">
      <TopImage
        title="Location"
        tag="Studio"
        subtitle={locationDescription.slice(0, 120) + (locationDescription.length > 120 ? '…' : '')}
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
            Studio Locations
          </h2>
          <div className="h-px flex-1 bg-neutral-200" />
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
