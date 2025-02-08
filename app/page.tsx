import Footer from "@/ui/footer";
import Blur from "@/ui/blur";

export default function Home() {
  return (
    <>
      <Blur />

      <div className="flex flex-col font-[family-name:var(--font-geist-sans)] max-w-[540px] mx-auto [padding:clamp(24px,calc((100vw-540px)/2),72px)_0]">
        <header className="grid grid-cols-[92px_1fr] gap-x-4 mb-9">
          <div className="row-[1/3] size-[92px] rounded-full bg-radial-[at_25%_25%] from-white to-neutral-500 to-75%" />
          <h1 className="col-[2/3] self-end text-[18px]">Dan Martynov</h1>
          <h2 className="col-[2/3] self-start text-[15px]">Design Engineer</h2>
        </header>

        <main className="text-[15px]">
          <section>
            <h3>About</h3>
            <p>
              {/* I bridge engineering approach with visual aesthetics.  */}
              All I want to do is build websites.
              {/* Thinking about performance, architecture, and how things feel. */}
            </p>
          </section>

          <br />

          <section>
            <h3>Projects</h3>

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

            <h4>EBRAINS CoCreate AI Art</h4>
            <p>
              A 3D web application showcasing the fusion of design and neuroscience, 
              highlighting the potential of Trustworthy AI in sustainable development.
            </p>
          </section>

          <br />

          <section>
            <h3>Experience</h3>
            
            <h4>Software Engineer at AMO</h4>
            <p>2021 – Present</p>
            <ul>
              <li>Architected complex web applications using Next.js and TypeScript.</li>
              <li>Streamlined feature delivery and improved testing workflows, fostering a collaborative environment.</li>
              <li>Mentored developers, emphasizing best practices in coding and design.</li>
            </ul>

            <br />

            <h4>Software Engineer at IWIS</h4>
            <p>2020 – 2021</p>
            <ul>
              <li>Developed single-page applications with React and Redux, focusing on performance and user experience.</li>
              <li>Enhanced SEO strategies through server-side rendering with Next.js.</li>
            </ul>

            <br />

            <h4>Designer at GALAGAN</h4>
            <p>2017 – 2019</p>
            <ul>
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
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
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

      <Footer />
    </>
  );
}
