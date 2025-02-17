export type Link = {
  href: string;
  title: string;
};

export type Paragraph = {
  id: string;
  link: Link;
  list: string[];
  year: string;
};

export type Content = {
  title: string;
  items: Partial<Paragraph>[];
};

export type Config = {
  title: string;
  description: string;
  content: Content[];
};

export default {
  title: "Dan Martynov",
  description: "Design Engineer",
  content: [
    {
      title: "About",
      items: [
        {
          id: "about-text",
          list: [
            "All I want to do is build websites. Let's create something great together.",
          ],
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          id: "projects-ebrains",
          year: "2023",
          link: {
            href: "https://ebrains.vercel.app",
            title: "EBRAINS CoCreate AI Art",
          },
          list: [
            "A 3D web application to visually communicate the convergence of design, neurotechnology, neuromorphic computing, trustworthy AI, and sustainable development.",
          ],
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          id: "work-patrianna",
          year: "2024 — Now",
          link: {
            href: "https://www.patrianna.com",
            title: "Software Engineer at PATRIANNA",
          },
          list: [
            "Improved workflows by implementing customizable and isolated UI parts.",
            "Mentored developers and contributed to team processes.",
            "Consistently optimized Core Web Vitals and improved performance.",
          ],
        },
        {
          id: "work-amo",
          year: "2021 — 2023",
          link: {
            href: "https://amo.tech",
            title: "Software Engineer at AMO",
          },
          list: [
            "Led the architecture of a complex website using Next.js and TypeScript.",
            "Developed a comprehensive design system documented with Storybook.",
            "Integrated purchase mechanics with PayPal, Google Pay, and Apple Pay.",
          ],
        },
        {
          id: "work-iwis",
          year: "2020 — 2021",
          link: {
            href: "https://iwis.io/en",
            title: "Software Engineer at IWIS",
          },
          list: [
            "Built dashboards with a focus on charts and data visualization.",
            "Developed mobile-first progressive web applications.",
          ],
        },
        {
          id: "work-galagan",
          year: "2017 — 2019",
          link: {
            href: "https://galagan.ua/en",
            title: "UI/UX Designer at GALAGAN",
          },
          list: [
            "Created a visual identity for brands, including logos, typography, and UI kits.",
          ],
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          id: "cert-prjctr",
          year: "2020",
          link: {
            href: "https://prjctr.com/en",
            title: "Front-end at Projector",
          },
        },
        {
          id: "cert-svc",
          year: "2016",
          link: {
            href: "https://svc.com.ua/en",
            title: "UI/UX Design at School of Visual Communication",
          },
        },
      ],
    },
    {
      title: "Connect",
      items: [
        {
          id: "connect-email",
          year: "Email",
          link: {
            href: "mailto:yungrari2046@gmail.com",
            title: "yungrari2046@gmail.com",
          },
        },
        {
          id: "connect-github",
          year: "GitHub",
          link: {
            href: "https://github.com/yungrari",
            title: "yungrari",
          },
        },
        {
          id: "connect-linkedin",
          year: "LinkedIn",
          link: {
            href: "https://linkedin.com/in/yungrari",
            title: "yungrari",
          },
        },
        {
          id: "connect-x",
          year: "X",
          link: {
            href: "https://x.com/8al3nc14g",
            title: "8al3nc14g",
          },
        },
        {
          id: "connect-telegram",
          year: "Telegram",
          link: {
            href: "https://t.me/gothicyoung",
            title: "@gothicyoung",
          },
        },
      ],
    },
  ],
} satisfies Config;
