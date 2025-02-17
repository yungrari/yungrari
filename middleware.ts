import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { geolocation } from "@vercel/functions";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const geo = geolocation(request);

  if (geo.latitude && geo.longitude) {
    response.cookies.set("latitude", geo.latitude);
    response.cookies.set("longitude", geo.longitude);
  }

  return response;
}

export const config = {
  matcher: "/",
};
