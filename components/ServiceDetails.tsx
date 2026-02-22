'use client';
import * as React from 'react';
import Link from 'next/link';
import { ChevronDown, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { TService } from '../src/entities/repositories';
import { IServiceDetailFields } from '../@types/generated/contentful';
import { TI18n, TLocale } from '../src/entities';
import { getWordsOnLocale } from '../src/utils';

const ServiceDetails = (props: {
  service: TService;
  serviceDetails: Record<string, IServiceDetailFields>;
  images: Record<string, string>;
  locale: TLocale;
  i18n: TI18n;
}) => {
  const [isExpanded, setExpanded] = React.useState(false);
  const { locale, i18n } = props;

  return (
    <Collapsible open={isExpanded} onOpenChange={setExpanded}>
      <div className="flex flex-col gap-2 px-4 pb-4">
        {props.service.reservation_url && (
          <div className="mb-1 text-center">
            <a
              target="_blank"
              rel="noreferrer"
              href={props.service.reservation_url}
            >
              <Button className="rounded-2xl bg-accent-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-600 hover:-translate-y-px hover:shadow-md">
                {i18n['general']['reserve']}
              </Button>
            </a>
          </div>
        )}

        <div className="flex w-full items-center justify-between">
          <Link
            href="/portfolio"
            locale={locale}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-accent-500 transition-all duration-200 hover:bg-accent-500 hover:text-white hover:scale-105"
            aria-label="View portfolio"
          >
            <User size={20} />
          </Link>

          <CollapsibleTrigger asChild>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-accent-500 transition-colors hover:bg-neutral-100"
              aria-label="Show more details"
            >
              <ChevronDown
                size={20}
                className={cn(
                  'transition-transform duration-200',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>
          </CollapsibleTrigger>
        </div>
      </div>

      {props.service.serviceDetails && (
        <CollapsibleContent>
          <div className="px-4 pb-4 pt-0">
            {props.service.serviceDetails.map((e) => (
              <p
                key={e.sys.id}
                className="mb-4 border-b border-neutral-200 pb-3 text-sm leading-[1.5] text-neutral-600 last:mb-0"
              >
                {getWordsOnLocale(
                  props.serviceDetails[e.sys.id],
                  'title',
                  locale
                )}
              </p>
            ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

export default ServiceDetails;
