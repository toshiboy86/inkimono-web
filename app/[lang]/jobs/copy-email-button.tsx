'use client'

import { CheckCheck, Copy } from 'lucide-react'
import { useState } from 'react'

const email = 'inkimono.com@gmail.com'

export default function CopyEmailButton(props: {
	copiedLabel: string
	copyLabel: string
}) {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		await navigator.clipboard.writeText(email)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<button
			type="button"
			onClick={handleCopy}
			className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50"
		>
			{copied ? (
				<CheckCheck size={15} className="text-green-500" />
			) : (
				<Copy size={15} />
			)}
			{copied ? props.copiedLabel : props.copyLabel}
		</button>
	)
}
