import type { Metadata } from 'next'
import type { TLocale, TMetadataProps } from '../../../src/entities'
import { getDictionary } from '../dictionaries'
import JobsPage from './jobs-page'

export async function generateMetadata({
	params,
}: TMetadataProps): Promise<Metadata> {
	const dict = await getDictionary(params.lang)

	return {
		title: dict.translation.meta.jobs_title,
		description: dict.translation.meta.jobs_description,
		openGraph: {
			images: [dict.translation.meta.og_images],
		},
		alternates: {
			canonical: '/jobs',
		},
	}
}

export default function Page(params: { params: { lang: TLocale } }) {
	return <JobsPage lang={params.params.lang} />
}
