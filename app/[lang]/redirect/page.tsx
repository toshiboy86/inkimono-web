'use client'
import { TLocale } from "../../../src/entities"

// Temporary fix for the root redirect error
export default function Page(params: { params: { lang: TLocale } }) {
  // TODO: params is added by next.js
const locale = (params as any).params.lang as TLocale
window.location.href = `${locale === 'en' ? '/' : '/ja'}`
}