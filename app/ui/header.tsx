import { User } from "@/app/ui/user";

export function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <header className="grid grid-cols-[92px_1fr] gap-x-4">
      <User />
      <h1 className="col-[2/3] self-end">{title}</h1>
      <h2 className="col-[2/3] self-start text-[var(--grey2)]">{subtitle}</h2>
    </header>
  );
}
