import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { geolocation } from '@vercel/functions'
 
export function middleware(request: NextRequest) {
  const geo = geolocation(request)
  const response = NextResponse.next()

  console.log({geo});

  Object.entries(geo).forEach(([name, value]) => {
    if (value) {
      response.headers.set(`x-${name}`, value)
    }
  })

  return response
}
 
export const config = {
  matcher: '/',
}
