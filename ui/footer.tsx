import Time from "./time";
import City from "./city";
import Weather from "./weather";

export default async function Footer() {
  return (
    <footer className="font-[family-name:var(--font-geist-mono)] border-t-1 border-neutral-100 text-[11px] text-neutral-400 py-4 mt-16">
      <div className="max-w-[540px] mx-auto flex justify-between">
        <City />
        <Weather />
        <Time />
      </div>
    </footer>
  )
}
