"use client";

import { useSearchParams } from "next/navigation";

export function Subtitle({ subtitle }: { subtitle: [string, string] }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return subtitle[mode === "default" ? 1 : 0];
}
