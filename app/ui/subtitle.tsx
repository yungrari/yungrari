"use client";

import { useSearchParams } from "next/navigation";

export function Subtitle({ subtitle }: { subtitle: string[] }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return subtitle[+(mode ?? 0)];
}
