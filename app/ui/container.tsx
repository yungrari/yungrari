export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-9 font-(family-name:--font-geist-sans) max-w-(--page-column-width) mx-auto pt-(--page-padding-top) pb-(--page-padding-bottom) px-(--page-padding)">
      {children}
    </main>
  );
}
