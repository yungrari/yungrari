import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { geolocation } from '@vercel/functions'
 
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const geo = geolocation(request)

  if (geo.city) {
    response.headers.set('x-geo-city', geo.city)
  }

  if (geo.latitude) {
    response.headers.set('x-geo-latitude', geo.latitude)
  }

  if (geo.longitude) {
    response.headers.set('x-geo-longitude', geo.longitude)
  }

  return response
}
 
export const config = {
  matcher: '/',
}
