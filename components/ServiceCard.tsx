import { Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
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

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">
              {getWordsOnLocale(props.service, 'title', locale)}
            </CardTitle>
            <p className="mt-2 text-2xl font-bold text-accent-500">
              ¥{props.service.price}
            </p>
          </div>
          {props.service.reservation_url && (
            <a
              target="_blank"
              rel="noreferrer"
              href={props.service.reservation_url}
              className="mt-1 ml-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-accent-600 hover:shadow-[0_4px_12px_rgba(217,119,87,0.3)]"
              aria-label="Make a reservation"
            >
              <Calendar size={20} />
            </a>
          )}
        </div>
      </CardHeader>
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt="Service image"
          className="h-[300px] w-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        {getWordsOnLocale(props.service, 'description', locale).content.map(
          (e: IServices, i: number) => (
            <p
              key={i}
              className={`text-sm leading-relaxed text-neutral-600 ${i > 0 ? 'mt-3' : ''}`}
            >
              {e.content.map((f) => f.value).join('')}
            </p>
          )
        )}
      </CardContent>
      <ServiceDetails
        service={props.service}
        serviceDetails={props.serviceDetails}
        images={props.images}
        locale={locale}
        i18n={i18n}
      />
    </Card>
  );
}
