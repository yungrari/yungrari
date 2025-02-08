import Footer from "@/ui/footer";
import Blur from "@/ui/blur";
import User from "@/ui/user";

export default function Home() {
  return (
    <>
      <Blur />

      <div className="flex flex-col font-[family-name:var(--font-geist-sans)] max-w-[var(--max-w)] mx-auto pt-[var(--pt)] pb-[var(--pb)] px-[var(--px)]">
        <header className="grid grid-cols-[92px_1fr] gap-x-4 mb-9">
          <User />
          <h1 className="col-[2/3] self-end text-[18px]">Dan Martynov</h1>
          <h2 className="col-[2/3] self-start text-[15px] text-[var(--grey2)]">Design Engineer</h2>
        </header>

        <main className="text-[15px] leading-[1.6]">
          <section className="mb-12">
            <h3 className="mb-3">About</h3>
            <p className="text-[var(--grey2)]">
              {/* I bridge engineering approach with visual aesthetics.  */}
              All I want to do is build websites.
              {/* Thinking about performance, architecture, and how things feel. */}
            </p>
          </section>

          <section className="mb-12">
            <h3 className="mb-6">Projects</h3>

            <p className="text-[var(--grey3)]">2023</p>

            <a
              className="flex items-center gap-1 hover:underline hover:underline-offset-4"
              href="https://ebrains.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>EBRAINS CoCreate AI Art</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </a>

            <p className="text-[var(--grey2)]">
              A 3D web application showcasing the fusion of design and neuroscience, 
              highlighting the potential of Trustworthy AI in sustainable development.
            </p>

            {/* <h4>HARNA</h4>
            <p>
              A Next.js application designed to streamline user interactions. 
              I led the architecture and integrated a comprehensive design system, 
              enhancing usability and performance.
            </p>

            <h4>MadMuscles</h4>
            <p>
              Developed engaging upsell mechanics post-purchase, 
              leveraging React and TypeScript to create a smooth user journey.
            </p> */}
          </section>

          <br />

          <section className="mb-12">
            <h3 className="mb-6">Experience</h3>

            <p className="text-[var(--grey3)]">2021 – Present</p>

            <a
              className="flex items-center gap-1 hover:underline hover:underline-offset-4"
              href="https://ebrains.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Software Engineer at AMO</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </a>
            
            <ul className="text-[var(--grey2)] mb-9">
              <li>Architected complex web applications using Next.js and TypeScript.</li>
              <li>Streamlined feature delivery and improved testing workflows, fostering a collaborative environment.</li>
              <li>Mentored developers, emphasizing best practices in coding and design.</li>
            </ul>

            <p className="text-[var(--grey3)]">2020 – 2021</p>
            <h4>Software Engineer at IWIS</h4>
            <ul className="text-[var(--grey2)] mb-9">
              <li>Developed single-page applications with React and Redux, focusing on performance and user experience.</li>
              <li>Enhanced SEO strategies through server-side rendering with Next.js.</li>
            </ul>

            <p className="text-[var(--grey3)]">2017 – 2019</p>
            <h4>Designer at GALAGAN</h4>
            <ul className="text-[var(--grey2)] mb-9">
              <li>Collaborated with designers to create responsive web components, ensuring visual harmony across platforms.</li>
            </ul>
          </section>

          <br />

          <section>
            <h3>Certifications</h3>
            <ul>
              <li>Front-end at Projector, 2020</li>
              <li>Visual Communication at SVC, 2016</li>
            </ul>
          </section>

          <br />

          <section>
            <h3>Connect</h3>
            <p>Let’s build something great together. Reach out via LinkedIn or email me at [email@example.com].</p>
          </section>
        </main>

        {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main> */}

        {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer> */}
      </div>

      <footer className="font-[family-name:var(--font-geist-mono)] uppercase border-t-1 border-neutral-100 text-[11px] text-neutral-400">
        <Footer />
      </footer>
    </>
  );
}
