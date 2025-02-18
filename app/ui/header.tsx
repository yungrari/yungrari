"use client";

import { useSearchParams } from "next/navigation";

import { User } from "@/app/ui/user";

export function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: [string, string];
}) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <header className="grid grid-cols-[92px_1fr] gap-x-4">
      <User />
      <h1 className="col-[2/3] self-end">{title}</h1>
      <h2 className="col-[2/3] self-start text-(--grey2)">
        {subtitle[mode === "design" ? 0 : 1]}
      </h2>
    </header>
  );
}
