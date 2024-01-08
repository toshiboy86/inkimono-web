/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(request.nextUrl.pathname.indexOf('/ja') !== -1 ? '/ja' : '/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home', '/ja/home'],
}