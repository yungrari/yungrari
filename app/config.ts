export type Link = {
  href: string;
  title: string;
};

export type Paragraph = {
  id: string;
  link: Link;
  list: string[];
  text: string;
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
          id: "1",
          text: "All I want to do is build websites. Let's create something great together.",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          id: "1",
          year: "2023",
          link: {
            href: "https://ebrains.ai",
            title: "EBRAINS CoCreate AI Art",
          },
          list: [
            "A 3D web application showcasing the fusion of design and neuroscience, highlighting the potential of Trustworthy AI in sustainable development.",
          ],
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          id: "1",
          year: "2021 – Present",
          link: {
            href: "https://amo.com",
            title: "Software Engineer at AMO",
          },
          list: [
            "Architected complex web applications using Next.js and TypeScript.",
            "Mentored developers, emphasizing best practices in coding and design.",
            "I led the architecture and integrated a comprehensive design system, enhancing usability and performance.",
            "Developed upsell mechanics post-purchase.",
          ],
        },
        {
          id: "2",
          year: "2020 – 2021",
          link: {
            href: "https://iwis.com",
            title: "Software Engineer at IWIS",
          },
          list: [
            "Developed single-page applications with React and Redux, focusing on performance and user experience.",
            "Enhanced SEO strategies through server-side rendering with Next.js.",
          ],
        },
        {
          id: "3",
          year: "2017 – 2019",
          link: {
            href: "https://galagan.com",
            title: "Designer at GALAGAN",
          },
          list: [
            "Collaborated with designers to create responsive web components, ensuring visual harmony across platforms.",
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
