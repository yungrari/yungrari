export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-9 font-[family-name:var(--font-geist-sans)] max-w-[var(--page-column-width)] mx-auto pt-[var(--page-padding-top)] pb-[var(--page-padding-bottom)] px-[var(--page-padding)]">
      {children}
    </main>
  );
}
