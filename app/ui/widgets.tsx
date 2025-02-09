
import Temperature from "./temperature";
import Time from "./time";

export default function Widgets() {
  return (
    <div className="mx-auto max-w-[var(--max-w)] p-[var(--px)] flex justify-between">
      <Temperature />
      <Time />
    </div>
  )
}
