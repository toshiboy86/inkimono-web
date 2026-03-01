import { TLocale } from '../../../src/entities';
import { fetchQuestionAndAnswer } from '../../../src/repositories';
import { getDictionary } from '../dictionaries';
import TopImage from '../../../components/TopImage';
import Inquiry from '../../../components/Inquiry';
import { IQuestionFields } from '../../../@types/generated/contentful';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';

export default async function FAQPage(params: { lang: TLocale }) {
  const faq = await fetchQuestionAndAnswer();
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white">
      <TopImage
        title="FAQ"
        tag="Help"
        subtitle="Find answers to common questions about our services, booking process, and studio."
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-400">
            Frequently Asked Questions
          </h2>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="mx-auto max-w-[800px]">
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((e: { fields: IQuestionFields }, index: number) => {
              const question =
                locale === 'en' ? e.fields.question_en : e.fields.question_ja;
              const answer =
                locale === 'en' ? e.fields.answer_en : e.fields.answer_ja;
              if (!question) return null;
              return (
                <AccordionItem
                  key={question}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 text-base font-semibold text-neutral-700 hover:text-accent-500 hover:no-underline [&[data-state=open]]:text-accent-500">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-sm leading-relaxed text-neutral-600">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
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
