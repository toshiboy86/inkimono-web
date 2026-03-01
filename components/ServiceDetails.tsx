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
      <div className="flex flex-col gap-2 px-5 pb-5">
        {props.service.reservation_url && (
          <a
            target="_blank"
            rel="noreferrer"
            href={props.service.reservation_url}
            className="flex w-full items-center justify-center rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 hover:shadow-[0_4px_12px_rgba(217,119,87,0.35)]"
          >
            {i18n['general']['reserve']}
          </a>
        )}

        <div className="flex w-full items-center justify-between pt-1">
          <Link
            href="/portfolio"
            locale={locale}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-neutral-400 transition-all duration-200 hover:bg-accent-500/20 hover:text-accent-400"
            aria-label="View portfolio"
          >
            <User size={16} />
          </Link>

          <CollapsibleTrigger asChild>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Show more details"
            >
              <ChevronDown
                size={16}
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
          <div className="border-t border-white/10 px-5 pb-5 pt-4">
            {props.service.serviceDetails.map((e) => (
              <p
                key={e.sys.id}
                className="mb-3 border-b border-white/10 pb-3 text-xs leading-relaxed text-neutral-400 last:mb-0 last:border-0"
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
