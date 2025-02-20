export type Link = {
  href: string;
  title: string;
};

export type Block = {
  id: string;
  link: Link;
  text: string;
  name: string;
};

export type Content = {
  title: string;
  items: Partial<Block>[];
};

export type Config = {
  title: string;
  description: string[];
  content: Content[];
};

export default {
  title: "Dan Martynov",
  description: ["Design Engineer", "Software Engineer", "TESTING"],
  content: [
    {
      title: "About",
      items: [
        {
          id: "about-text",
          text: "All I want to do is build websites. Let's create something great together.",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          id: "projects-ebrains",
          name: "2023",
          link: {
            href: "https://ebrains.vercel.app",
            title: "EBRAINS CoCreate AI Art",
          },
          text: "A 3D web application to visually communicate the convergence of design, neurotechnology, neuromorphic computing, trustworthy AI, and sustainable development.",
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          id: "work-patrianna",
          name: "2024 — Now",
          link: {
            href: "https://www.patrianna.com",
            title: "Software Engineer at PATRIANNA",
          },
          text: "Improved workflows by implementing customizable and isolated UI. Mentored developers and contributed to team processes. Consistently optimized Core Web Vitals and improved performance.",
        },
        {
          id: "work-amo",
          name: "2021 — 2023",
          link: {
            href: "https://amo.tech",
            title: "Software Engineer at AMO",
          },
          text: "Led the architecture of a complex website using Next.js and TypeScript. Developed a comprehensive design system documented with Storybook. Integrated purchase mechanics with PayPal, Google Pay, and Apple Pay.",
        },
        {
          id: "work-iwis",
          name: "2020 — 2021",
          link: {
            href: "https://iwis.io/en",
            title: "Software Engineer at IWIS",
          },
          text: "Built dashboards with a focus on charts and data visualization. Developed mobile-first progressive web applications.",
        },
        {
          id: "work-galagan",
          name: "2017 — 2019",
          link: {
            href: "https://galagan.ua/en",
            title: "UI/UX Designer at GALAGAN",
          },
          text: "Created a visual identity for brands, including logos, typography, and UI kits.",
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          id: "cert-prjctr",
          name: "2020",
          link: {
            href: "https://prjctr.com/en",
            title: "Front-end at Projector",
          },
        },
        {
          id: "cert-svc",
          name: "2016",
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
          name: "Email",
          link: {
            href: "mailto:yungrari2046@gmail.com",
            title: "yungrari2046@gmail.com",
          },
        },
        {
          id: "connect-github",
          name: "GitHub",
          link: {
            href: "https://github.com/yungrari",
            title: "yungrari",
          },
        },
        {
          id: "connect-linkedin",
          name: "LinkedIn",
          link: {
            href: "https://linkedin.com/in/yungrari",
            title: "yungrari",
          },
        },
        {
          id: "connect-telegram",
          name: "Telegram",
          link: {
            href: "https://t.me/gothicyoung",
            title: "gothicyoung",
          },
        },
      ],
    },
  ],
} satisfies Config;
