"use client";

import { useSearchParams } from "next/navigation";

export function Subtitle({ subtitle }: { subtitle: string[] }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return <h2 className="text-(--grey2)">{subtitle[+(mode ?? 0)]}</h2>;
}
