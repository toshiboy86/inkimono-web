import {
	CalendarDays,
	CheckCircle2,
	Clock,
	Coins,
	Send,
	Sparkles,
} from 'lucide-react'
import TopImage from '../../../components/TopImage'
import type { TLocale } from '../../../src/entities'
import CopyEmailButton from './copy-email-button'

const conditionIcons = [
	Coins,
	CalendarDays,
	Clock,
	CalendarDays,
	Sparkles,
	Sparkles,
]

const email = 'inkimono.com@gmail.com'

const content = {
	en: {
		hero: {
			title: 'Jobs',
			tag: 'Work with INKIMONO',
			subtitle:
				'Join our Asakusa studio and help us care for beautiful vintage kimono.',
		},
		lookingForHeading: "I'm looking for someone who is:",
		lookingFor: [
			'Interested in kimono',
			'Punctual',
			'Diligent, careful & organised — you will be handling vintage and valuable silk kimono',
			'Flexible with working days',
			'Can communicate well in English',
			'Ideally interested in a long-term collaboration',
		],
		overview: [
			'The work includes preparing kimono for photoshoots (ironing, attaching haneri, etc.), laundry, keeping the studio clean, tidy and organised, checking and organising the inventory, and general studio support.',
			'I can teach you everything from scratch, but kimono knowledge and/or experience with clothing care will be a big plus.',
			'A friendly, kind and people-oriented attitude is important. As INKIMONO is an LGBTQ+ inclusive business, I’m looking for someone who is respectful and supportive of LGBTQ+ people.',
			"All nationalities and backgrounds are welcome. Coloured hair, visible tattoos and piercings are absolutely fine. What matters to me is that you're kind, reliable and willing to learn.",
			"The role may also involve being present in the studio while clients are changing and preparing for their photoshoot, so you should be comfortable working in this environment while respecting clients' privacy and boundaries.",
		],
		conditionsHeading: 'Working conditions',
		conditions: [
			'¥1,300–¥1,500/hour + transportation expenses',
			'Usually around 3 days/week (sometimes 2, sometimes 4)',
			'Mostly 10:30–13:30/14:00, sometimes longer depending on the photoshoot schedule',
			'Working days are irregular, but I can provide the schedule approximately one month in advance',
			'The number of shifts varies depending on the season and booking volume — some months are significantly busier than others, while quieter periods may have fewer shifts',
			'Working hours may also vary seasonally; for example, summer shoots generally have a later schedule due to the heat',
		],
		applicationHeading: 'How to apply',
		applicationIntro: 'If you are interested, please send an email with:',
		applicationItems: [
			'Your name',
			'Your nearest station and approximately how long your commute to my studio would be',
			'Your current visa/work authorisation and how long you expect to stay in Japan',
			'Languages you speak and your level',
			'Your general availability',
			'Whether you are looking for short-term or long-term work',
			'Any relevant work experience',
			'Any experience or knowledge of kimono, clothing care (washing, ironing, folding, organising, etc.)',
			'A short introduction about yourself and why you would like to work with INKIMONO',
		],
		emailIntro: 'Please send your application to',
		closing:
			'I’m looking for someone I can hopefully work with for a long time, so while previous experience is welcome, attitude, reliability and willingness to learn are just as important.',
		copyLabel: 'Copy email address',
		copiedLabel: 'Copied!',
	},
	ja: {
		hero: {
			title: '求人',
			tag: '採用情報',
			subtitle:
				'浅草のスタジオで、美しいヴィンテージ着物を扱う仕事を一緒にしませんか。',
		},
		lookingForHeading: 'こんな方を探しています：',
		lookingFor: [
			'着物に興味がある方',
			'時間を守れる方',
			'丁寧で、責任感があり、整理整頓が得意な方　※ヴィンテージや貴重な正絹の着物を扱います',
			'勤務日の変動に柔軟に対応できる方',
			'英語でのコミュニケーションができる方',
			'できれば長期的に一緒に働いてくださる方',
		],
		overview: [
			'仕事内容は、撮影用の着物の準備（アイロンがけ、半衿付けなど）、洗濯、スタジオの清掃・整理整頓、着物や備品の在庫確認・整理、その他スタジオ業務のサポートなどです。',
			'着物についての知識がなくても、一からすべてお教えします。ただし、着物の知識や、衣類のお手入れ（洗濯・アイロン・たたみ方・整理など）の経験がある方は大歓迎です。',
			'人と接することが好きで、明るく優しく、周りへの気遣いができる方を歓迎します。',
			'INKIMONOはLGBTQ+フレンドリーなサービスですので、LGBTQ+の方々を尊重し、理解のある方を希望します。',
			'国籍やバックグラウンドは問いません。髪色、タトゥー、ピアスなども問題ありません。大切なのは、優しく、責任感があり、新しいことを学ぶ意欲があることです。',
			'また、お客様が着替えたり撮影の準備をしたりする際に、スタジオ内で一緒に作業する場合があります。そのため、お客様のプライバシーや境界線を尊重しながら、このような環境で働くことに抵抗のない方を希望します。',
		],
		conditionsHeading: '勤務条件',
		conditions: [
			'時給 1,300～1,500円 ＋ 交通費支給',
			'週3日程度（2日や4日になる場合もあります）',
			'基本的に10:30～13:30／14:00頃、撮影スケジュールによっては延長する場合があります',
			'勤務日は固定ではありませんが、基本的に1か月前頃までにスケジュールをお伝えします',
			'季節や予約状況によって勤務日数が変わります。忙しい月もあれば、比較的予約が少なく勤務日数が少なくなる時期もあります',
			'季節によって勤務時間も変わる場合があります。特に夏は暑さのため、撮影時間が通常より遅くなることがあります',
		],
		applicationHeading: '応募方法',
		applicationIntro: 'ご興味のある方は、以下の内容をメールでお送りください：',
		applicationItems: [
			'お名前',
			'最寄り駅と、スタジオまでの通勤時間の目安',
			'現在の在留資格・就労資格、および今後どのくらい日本に滞在する予定か',
			'話せる言語とレベル',
			'現在の勤務可能日・曜日・時間帯',
			'短期・長期のどちらを希望しているか',
			'これまでの職歴や関連する経験',
			'着物や衣類のお手入れ（洗濯、アイロン、たたみ方、整理など）に関する経験や知識',
			'簡単な自己紹介と、INKIMONOで働きたいと思った理由',
		],
		emailIntro: 'ご応募・お問い合わせはこちらまで：',
		closing:
			'これからできれば長く一緒に働いていただける方を探しています。経験があることはもちろん歓迎ですが、人柄、責任感、そして新しいことを学ぶ姿勢も同じくらい大切だと考えています。',
		copyLabel: 'メールアドレスをコピー',
		copiedLabel: 'コピーしました',
	},
} as const

function CheckList({ items }: { items: readonly string[] }) {
	return (
		<ul className="grid gap-4 sm:grid-cols-2">
			{items.map((item) => (
				<li
					key={item}
					className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 leading-relaxed text-neutral-700 shadow-sm transition-colors hover:border-accent-200"
				>
					<CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-500" />
					<span>{item}</span>
				</li>
			))}
		</ul>
	)
}

function NumberedList({ items }: { items: readonly string[] }) {
	return (
		<ul className="space-y-3">
			{items.map((item, index) => (
				<li key={item} className="flex items-start gap-3 leading-relaxed">
					<span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-accent-300">
						{index + 1}
					</span>
					<span>{item}</span>
				</li>
			))}
		</ul>
	)
}

export default function JobsPage({ lang }: { lang: TLocale }) {
	const copy = content[lang]

	return (
		<main className="min-h-screen bg-white">
			<TopImage
				title={copy.hero.title}
				tag={copy.hero.tag}
				subtitle={copy.hero.subtitle}
			/>

			<div className="mx-auto max-w-4xl space-y-16 px-6 py-16">
				<section aria-labelledby="candidate-heading">
					<h2
						id="candidate-heading"
						className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900"
					>
						{copy.lookingForHeading}
					</h2>
					<CheckList items={copy.lookingFor} />
				</section>

				<section className="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 text-base leading-relaxed text-neutral-700 md:p-8">
					{copy.overview.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</section>

				<section aria-labelledby="conditions-heading">
					<div className="mb-6 flex items-center gap-4">
						<h2
							id="conditions-heading"
							className="text-2xl font-semibold tracking-tight text-neutral-900"
						>
							{copy.conditionsHeading}
						</h2>
						<div className="h-px flex-1 bg-neutral-200" />
					</div>
					<ul className="grid gap-4 sm:grid-cols-2">
						{copy.conditions.map((item, index) => {
							const Icon = conditionIcons[index] ?? Sparkles
							return (
								<li
									key={item}
									className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
								>
									<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
										<Icon size={18} />
									</span>
									<span className="leading-relaxed text-neutral-700">
										{item}
									</span>
								</li>
							)
						})}
					</ul>
				</section>

				<section aria-labelledby="application-heading">
					<div className="relative overflow-hidden rounded-2xl bg-neutral-950 p-7 text-white shadow-lg md:p-10">
						<div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
						<div className="relative">
							<span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400">
								<Send size={12} />
								{copy.applicationHeading}
							</span>
							<h2
								id="application-heading"
								className="mt-3 text-2xl font-semibold tracking-tight"
							>
								{copy.applicationIntro}
							</h2>
							<div className="mt-6 text-neutral-200">
								<NumberedList items={copy.applicationItems} />
							</div>

							<div className="mt-8 flex flex-col gap-4 rounded-2xl bg-white p-5 text-neutral-900 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<p className="text-sm font-medium text-neutral-500">
										{copy.emailIntro}
									</p>
									<p className="mt-1 break-all text-lg font-semibold text-accent-600">
										{email}
									</p>
								</div>
								<CopyEmailButton
									copyLabel={copy.copyLabel}
									copiedLabel={copy.copiedLabel}
								/>
							</div>
						</div>
					</div>
				</section>

				<p className="border-l-4 border-accent-500 pl-5 text-base leading-relaxed text-neutral-700">
					{copy.closing}
				</p>
			</div>
		</main>
	)
}
