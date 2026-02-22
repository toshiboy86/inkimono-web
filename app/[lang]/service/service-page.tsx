import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Inquiry from '../../../components/Inquiry';
import ServiceCard from '../../../components/ServiceCard';
import TopImage from '../../../components/TopImage';
import { TLocale } from '../../../src/entities';
import { TService } from '../../../src/entities/repositories';
import {
  makeServiceFactory,
  makeServiceCategoryFactory,
  makeServiceDetailsFactory,
} from '../../../src/factories';
import {
  fetchServices,
  fetchPortfolioImagesById,
  fetchServiceCategories,
  fetchDescriptions,
  fetchServiceDetails,
} from '../../../src/repositories';
import { getDictionary } from '../dictionaries';

export default async function ServicePage(params: { lang: TLocale }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  const services = await fetchServices();
  const serviceDto = makeServiceFactory(services);

  const images = await fetchPortfolioImagesById();

  let group_service: Record<string, TService[]> = {};
  serviceDto.forEach((e: TService) => {
    const catId = e.serviceCategory?.sys.id;
    if (catId === undefined) console.error('serviceCategory Id is not defined');
    if (!group_service[catId!]) {
      group_service = { ...group_service, [catId!]: [e] };
    } else {
      group_service[catId!].push(e);
    }
  });

  const categoriesRepo = await fetchServiceCategories();
  const categories = await makeServiceCategoryFactory(categoriesRepo);
  const description = await fetchDescriptions();
  const serviceDetails = await fetchServiceDetails();
  const serviceDetailsDto = makeServiceDetailsFactory(serviceDetails);
  const yourPlan = description[0].fields[`chooseYourPlan_${locale}`];

  return (
    <main className="min-h-screen">
      <TopImage title="Plans & Pricing" />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="flex flex-col justify-center md:col-span-7">
            <h2 className="mb-6 font-semibold text-[1.875rem] leading-[1.3] tracking-[-0.025em] text-neutral-700 md:text-[2.25rem]">
              {dict['translation']['general']['about_my_service']}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-neutral-600">
              {dict['translation']['service']['about_1']}
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              {dict['translation']['service']['about_2']}
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/service%2Ftop.JPG?alt=media&token=21f80381-71eb-4fd5-bda8-b13e578d7986"
              alt="Service overview image"
              className="h-[400px] w-full rounded-3xl object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:h-[500px] lg:h-[600px]"
            />
          </div>
        </div>

        <div className="mb-12 mt-16 text-center">
          <h4 className="mb-8 font-semibold text-[1.5rem] leading-[1.3] tracking-[-0.025em] text-neutral-700 md:text-[2rem]">
            {dict['translation']['service']['plan_top_1']}
          </h4>
          <div className="mx-auto max-w-[800px] text-base leading-relaxed text-neutral-600 [&_p]:mb-4">
            {yourPlan && documentToReactComponents(yourPlan as any)}
          </div>
        </div>

        {categories.map((cat) => (
          <div key={cat.id} className="mb-16">
            <h5 className="mb-10 mt-16 text-center font-semibold text-[1.25rem] tracking-[-0.025em] text-neutral-700 md:text-[1.5rem]">
              {cat.title}
            </h5>
            <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-3">
              {group_service[cat.id].map((service) => (
                /* @ts-expect-error Server Component */
                <ServiceCard
                  key={service.id + cat.id}
                  service={service}
                  serviceDetails={serviceDetailsDto}
                  images={images}
                  locale={locale}
                  i18n={dict['translation']}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="relative flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[500px] lg:h-[600px]"
        style={{ backgroundImage: 'url(//www.inkimono.com/slider-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        {/* @ts-expect-error Server Component */}
        <Inquiry lang={params.lang} />
      </div>
    </main>
  );
}
