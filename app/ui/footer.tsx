import { Location } from "./location";
import { Time } from "./time";
import { Theme } from "./theme";

export function Footer() {
  return (
    <footer className="font-(family-name:--font-geist-mono) text-(--wash1) uppercase print:hidden">
      <div className="p-(--page-padding-inline) max-w-(--page-column-width) mx-auto flex justify-start gap-4">
        <Location />
        <Time />
        <Theme />
      </div>
    </footer>
  );
}
