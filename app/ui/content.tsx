import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import config from "@/app/config";

export function Content() {
  return (
    <article className="flex flex-col gap-15">
      {config.content.map((section) => (
        <section
          className="flex flex-col gap-6 first:gap-3 nth-[4]:[&>ul]:gap-3"
          key={section.title}
        >
          <h3>{section.title}</h3>

          <ul className="flex flex-col gap-6">
            {section.items.map((item) => (
              <li key={item.id}>
                {item.year && (
                  <p className="text-[var(--grey3)]">{item.year}</p>
                )}

                {item.text && (
                  <p className="text-[var(--grey2)]">{item.text}</p>
                )}

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

                {item.list && (
                  <ul className="text-[var(--grey2)]">
                    {item.list.map((listItem) => (
                      <li key={listItem}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
