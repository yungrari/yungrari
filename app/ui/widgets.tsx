import { Location } from "./location";
import { Time } from "./time";
import { Theme } from "./theme";

export default function Widgets() {
  return (
    <div className="max-w-[var(--page-column-width)] mx-auto p-[var(--page-padding)] flex justify-start gap-4">
      <Location />
      <Time />
      <Theme />
    </div>
  );
}
