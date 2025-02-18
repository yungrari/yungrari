import { Suspense } from "react";

import { User } from "@/app/ui/user";
import { Subtitle } from "@/app/ui/subtitle";

export function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: [string, string];
}) {
  return (
    <header className="grid grid-cols-[92px_1fr] gap-x-4">
      <User />
      <h1 className="col-[2/3] self-end">{title}</h1>
      <h2 className="col-[2/3] self-start text-(--grey2)">
        <Suspense fallback=" ">
          <Subtitle subtitle={subtitle} />
        </Suspense>
      </h2>
    </header>
  );
}
