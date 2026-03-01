import { Calendar } from 'lucide-react';
import { TLocationsRepository } from '../src/entities/repositories';
import { getWordsOnLocale } from '../src/utils';
import { TLocale } from '../src/entities';

export default function LocationCard(props: {
  location: TLocationsRepository;
  images: Record<string, string>;
  locale: TLocale;
}) {
  const reservationUrl = props.location.fields.reservation_url;
  const imageId = props.location.fields.main_image?.sys.id as string;
  const image =
    props.images[imageId] ||
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg';

  const titleText = getWordsOnLocale(props.location.fields, 'title', props.locale);
  const descContent = getWordsOnLocale(
    props.location.fields,
    'description',
    props.locale
  ).content;

  return (
    <div className="group overflow-hidden rounded-2xl bg-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Photo header */}
      <div className="relative h-60 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={titleText}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
        {reservationUrl && (
          <a
            target="_blank"
            rel="noreferrer"
            href={reservationUrl}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-accent-600"
            aria-label="Make a reservation"
          >
            <Calendar size={18} />
          </a>
        )}
      </div>

      {/* Body */}
      <div className="px-6 py-5">
        <h3 className="mb-3 text-lg font-semibold text-white">{titleText}</h3>
        <div className="space-y-2">
          {descContent.map((e: any, i: number) => (
            <p key={i} className="text-sm leading-relaxed text-neutral-400">
              {e.content.map((f: any) => f.value).join('')}
            </p>
          ))}
        </div>
        {reservationUrl && (
          <a
            target="_blank"
            rel="noreferrer"
            href={reservationUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 hover:shadow-[0_4px_12px_rgba(217,119,87,0.3)]"
          >
            <Calendar size={14} />
            Reserve this location
          </a>
        )}
      </div>
    </div>
  );
}
