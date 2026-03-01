import dynamic from 'next/dynamic';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import { TDescriptionRepository } from '../src/entities/repositories';
import { TI18n, TLocale } from '../src/entities';
import Article from './Typography/Article';

const MapComponent = dynamic(() => import('./MapCard'), { ssr: false });

function extractText(node: any): string {
  if (node.nodeType === 'text') return node.value || '';
  if (node.content) return node.content.map(extractText).join('');
  return '';
}

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const text = extractText(node);
      if (/instagram\.com\/inkimono/i.test(text)) {
        return (
          <p className="mb-4 flex items-center gap-2">
            <a
              href="https://www.instagram.com/inkimono"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-accent-500 transition-colors hover:text-accent-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              @inkimono
            </a>
          </p>
        );
      }
      return <p>{children}</p>;
    },
  },
};

const TopIntroduction = (props: {
  description: TDescriptionRepository;
  lang: TLocale;
  i18n: TI18n;
}) => {
  const { lang, i18n } = props;
  const description = JSON.stringify(
    props.description.fields[`aboutme_${lang}`]
  );
  if (!description) throw 'description is not found';

  return (
    <>
      <div className="mb-8">
        <Article
          imageSrc="/wrapper-img.jpg"
          imageAlt="Stasia self portrait image sitting in the Studio"
        >
          <h2 className="mb-6 text-[1.875rem] font-semibold leading-[1.3] tracking-[-0.025em] text-neutral-700 md:text-[2.25rem]">
            About Me
          </h2>
          <div className="pt-2">
            <div className="text-base leading-relaxed text-neutral-600 [&_p]:mb-4">
              {description && documentToReactComponents(JSON.parse(description), richTextOptions)}
            </div>
          </div>
        </Article>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="mb-6 text-[1.875rem] font-semibold leading-[1.3] tracking-[-0.025em] text-neutral-700 md:text-[2.25rem]">
            {i18n['index']['studio_title']}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-neutral-600">
            {i18n['index']['studio_me_1']}
          </p>
          <div className="mb-8 overflow-hidden rounded-2xl shadow-md">
            <MapComponent />
          </div>
          <div className="mb-10 mt-8 text-center">
            <Link
              href="/service"
              locale={lang}
              className="inline-flex items-center rounded-2xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 hover:shadow-lg"
            >
              {i18n['general']['view_service']}
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <img
            src="/studio.jpg"
            alt="Stasia in front of the Studio"
            className="h-[400px] w-full rounded-3xl object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:h-[500px] lg:h-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default TopIntroduction;
