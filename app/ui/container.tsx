export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="
        flex
        flex-col
        gap-9
        font-(family-name:--font-geist-sans)
        pt-(--page-padding-top)
        pb-(--page-padding-bottom)
        px-(--page-padding-inline)
        max-w-(--page-column-width)
        mx-auto
      "
    >
      {children}
    </main>
  );
}
