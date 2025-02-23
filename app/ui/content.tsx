import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import type { Content, Block } from "@/app/config";

function Unit({ name, link, text }: Partial<Block>) {
  return (
    <li>
      {name && <p className="text-(--grey3)">{name}</p>}

      {link && (
        <a
          className="flex items-center gap-0.5 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          {...link}
        >
          <span>{link.title}</span>
          <ArrowTopRightIcon className="print:hidden" />
        </a>
      )}

      {text && <p className="text-(--grey2) whitespace-pre-line">{text}</p>}
    </li>
  );
}

function Section({ title, items }: Content) {
  return (
    <section
      className="
        flex
        flex-col
        gap-6
        first:gap-3
        nth-[4]:[&>ul]:gap-2
        nth-[5]:[&>ul]:gap-2
        print:gap-3
        print:nth-[4]:[&>ul]:gap-0
        print:nth-[5]:[&>ul]:gap-0
      "
    >
      <h3>{title}</h3>

      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <Unit key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

export function Content({ content }: { content: Content[] }) {
  return (
    <article className="flex flex-col gap-15 print:gap-6">
      {content.map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </article>
  );
}
