import { Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
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

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl">
            {getWordsOnLocale(props.location.fields, 'title', props.locale)}
          </CardTitle>
          {reservationUrl && (
            <a
              target="_blank"
              rel="noreferrer"
              href={reservationUrl}
              className="mt-1 ml-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-accent-600 hover:shadow-[0_4px_12px_rgba(217,119,87,0.3)]"
              aria-label="Make a reservation"
            >
              <Calendar size={20} />
            </a>
          )}
        </div>
      </CardHeader>
      <div className="overflow-hidden rounded-b-2xl">
        <img
          src={image}
          alt="Location image"
          className="h-[300px] w-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        {getWordsOnLocale(
          props.location.fields,
          'description',
          props.locale
        ).content.map((e: any, i: number) => (
          <p
            key={i}
            className={`text-sm leading-relaxed text-neutral-600 ${i > 0 ? 'mt-3' : ''}`}
          >
            {e.content.map((f: any) => f.value).join('')}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}
