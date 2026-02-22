import { Calendar } from 'lucide-react';
import { TService } from '../src/entities/repositories';
import { IServiceDetailFields } from '../@types/generated/contentful';
import { TI18n, TLocale } from '../src/entities';
import { getWordsOnLocale } from '../src/utils';
import ServiceDetails from './ServiceDetails';

interface IServices {
  content: [{ value: string[] }];
}

export default async function ServiceCard(props: {
  service: TService;
  serviceDetails: Record<string, IServiceDetailFields>;
  images: Record<string, string>;
  locale: TLocale;
  i18n: TI18n;
  key: string;
}) {
  const { locale, i18n } = props;

  const imageUrl =
    props.images[props.service.mainImage!.sys.id] ||
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg';

  const titleText = getWordsOnLocale(props.service, 'title', locale);

  return (
    <div className="group overflow-hidden rounded-2xl bg-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Photo header */}
      <div className="relative h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={titleText}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
        {/* Price badge */}
        <span className="absolute bottom-3 left-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white shadow-md">
          ¥{props.service.price}
        </span>
        {/* Reserve button */}
        {props.service.reservation_url && (
          <a
            target="_blank"
            rel="noreferrer"
            href={props.service.reservation_url}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-accent-500 hover:scale-105"
            aria-label="Make a reservation"
          >
            <Calendar size={16} />
          </a>
        )}
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <h3 className="mb-3 text-base font-semibold leading-snug text-white">
          {titleText}
        </h3>
        <div className="space-y-1.5">
          {getWordsOnLocale(props.service, 'description', locale).content.map(
            (e: IServices, i: number) => (
              <p key={i} className="text-xs leading-relaxed text-neutral-400">
                {e.content.map((f) => f.value).join('')}
              </p>
            )
          )}
        </div>
      </div>

      <ServiceDetails
        service={props.service}
        serviceDetails={props.serviceDetails}
        images={props.images}
        locale={locale}
        i18n={i18n}
      />
    </div>
  );
}
