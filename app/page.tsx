import Blur from "@/app/ui/blur";
import Content from "@/app/ui/content";
import User from "@/app/ui/user";
import Widgets from "@/app/ui/widgets";

import config from "./config";

export default function Home() {
  return (
    <>
      <Blur />

      <main className="flex flex-col gap-9 font-[family-name:var(--font-geist-sans)] max-w-[var(--page-column-width)] mx-auto pt-[var(--page-padding-top)] pb-[var(--page-padding-bottom)] px-[var(--page-padding)]">
        <header className="grid grid-cols-[92px_1fr] gap-x-4">
          <User />
          <h1 className="col-[2/3] self-end">{config.title}</h1>
          <h2 className="col-[2/3] self-start text-[var(--grey2)]">{config.description}</h2>
        </header>

        <Content />
      </main>

      <footer className="font-[family-name:var(--font-geist-mono)] uppercase text-[var(--wash1)]">
        <Widgets />
      </footer>
    </>
  );
}
