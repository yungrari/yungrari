import Footer from "@/ui/footer";
import Blur from "@/ui/blur";
import User from "@/ui/user";

import config from "./config";

export default function Home() {
  return (
    <>
      <Blur />

      <main className="flex flex-col gap-9 font-[family-name:var(--font-geist-sans)] max-w-[var(--max-w)] mx-auto pt-[var(--pt)] pb-[var(--pb)] px-[var(--px)]">
        <header className="grid grid-cols-[92px_1fr] gap-x-4">
          <User />
          <h1 className="col-[2/3] self-end">{config.title}</h1>
          <h2 className="col-[2/3] self-start text-[var(--grey2)]">{config.description}</h2>
        </header>

        <article className="flex flex-col gap-15">
          {config.content.map(section => (
            <section className="flex flex-col gap-6" key={section.title}>
              <h3>{section.title}</h3>

              <div className="flex flex-col gap-6">
                {typeof section.content === "string" 
                  ? (
                    <p className="text-[var(--grey2)]">{section.content}</p>
                  ) : section.content.map(item => (
                    <div key={item.title}>
                      {!!item.year && (
                        <p className="text-[var(--grey3)]">{item.year}</p>
                      )}

                      {!!item.link && (
                        <a
                          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                          href={item.link}
                          title={item.title}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{item.title}</span>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}

                      {'content' in item && (
                        typeof item.content === "string" 
                          ? (
                            <p className="text-[var(--grey2)]">
                              {item.content}
                            </p>
                          )
                          : (
                            <ul className="text-[var(--grey2)]">
                              {item.content.map(li => (
                                <li key={li}>{li}</li>
                              ))}
                            </ul>
                          )
                        )
                      }
                    </div>
                  ))
                }
              </div>
            </section>
          ))}
        </article>
      </main>

      <footer className="font-[family-name:var(--font-geist-mono)] uppercase border-t-1 border-neutral-200 dark:border-neutral-800 text-[var(--grey3)] opacity-50">
        <Footer />
      </footer>
    </>
  );
}
