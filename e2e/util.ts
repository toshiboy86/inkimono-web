import { type Page, expect } from '@playwright/test'

export function url(path: string) {
	return `http://localhost:3000${path}`
}
