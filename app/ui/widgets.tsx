
import Temperature from "./temperature";
import Time from "./time";

export default function Widgets() {
  return (
    <div className="mx-auto max-w-[var(--page-column-width)] p-[var(--page-padding)] flex justify-between">
      <Temperature />
      <Time />
    </div>
  )
}
