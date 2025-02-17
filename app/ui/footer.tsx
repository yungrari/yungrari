import { Location } from "./location";
import { Time } from "./time";
import { Theme } from "./theme";

export function Footer() {
  return (
    <footer className="font-[family-name:var(--font-geist-mono)] uppercase text-[var(--wash1)]">
      <div className="max-w-[var(--page-column-width)] mx-auto p-[var(--page-padding)] flex justify-start gap-4">
        <Location />
        <Time />
        <Theme />
      </div>
    </footer>
  );
}
