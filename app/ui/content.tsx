import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import type { Content } from "@/app/config";

function Section({ title, items }: Content) {
  return (
    <section className="flex flex-col gap-6 first:gap-3 nth-[4]:[&>ul]:gap-1 nth-[5]:[&>ul]:gap-1">
      <h3>{title}</h3>

      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <li key={item.id}>
            {item.name && <p className="text-(--grey3)">{item.name}</p>}

            {item.link && (
              <a
                className="flex items-center gap-0.5 hover:underline hover:underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
                {...item.link}
              >
                <span>{item.link.title}</span>
                <ArrowTopRightIcon />
              </a>
            )}

            {item.text && <p className="text-(--grey2)">{item.text}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Content({ content }: { content: Content[] }) {
  return (
    <article className="flex flex-col gap-15">
      {content.map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </article>
  );
}
