import { Suspense } from "react";

import { User } from "@/app/ui/user";
import { Subtitle } from "@/app/ui/subtitle";

export function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string[];
}) {
  return (
    <header className="flex items-center gap-4">
      <User />
      <section>
        <h1>{title}</h1>
        <Suspense fallback={subtitle[0]}>
          <Subtitle subtitle={subtitle} />
        </Suspense>
      </section>
    </header>
  );
}
