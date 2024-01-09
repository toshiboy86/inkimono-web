'use client'

import { redirect } from 'next/navigation'
// Temporary fix for the root redirect error
// FIXME: potential error loop
export default function Error() {
  window.location.href = '/'
}