import { headers } from "next/headers";

import Time from "./time";
import City from "./city";
import Weather from "./weather";

export default async function Footer() {
  const headersList = await headers()

  return (
    <footer className="font-[family-name:var(--font-geist-mono)] uppercase border-t-1 border-neutral-100 text-[11px] text-neutral-400 mt-16">
      <div className="max-w-[540px] mx-auto px-6 py-4 flex justify-between">
        <City city={headersList.get('x-geo-city') || ''} />
        <Weather latitude={headersList.get('x-geo-latitude') || ''} longitude={headersList.get('x-geo-longitude') || ''} />
        <Time time={new Date().toLocaleTimeString('en-US', { hour12: false })} />
      </div>
    </footer>
  )
}
