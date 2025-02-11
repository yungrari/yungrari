type Link = {
  href: string;
  title: string;
};

type Items = {
  id: string;
  link: Link;
  list: string[];
  text: string;
  year: string;
};

type Content = {
  title: string;
  items: Partial<Items>[];
};

type Config = {
  title: string;
  description: string;
  content: Content[];
};

const config: Config = {
  title: "Dan Martynov",
  description: "Design Engineer",
  content: [
    {
      title: "About",
      items: [
        {
          id: "1",
          text: "All I want to do is build websites.",
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
          id: "1",
          year: "2020",
          link: {
            href: "https://projector.com",
            title: "Front-end at Projector",
          },
          list: [],
        },
        {
          id: "2",
          year: "2016",
          link: {
            href: "https://svc.com",
            title: "UI/UX Design at SVC",
          },
          list: [],
        },
      ],
    },
    {
      title: "Connect",
      items: [
        {
          id: "1",
          text: "Let’s build something great together. Reach out via LinkedIn or email me at [email@example.com].",
        },
      ],
    },
  ],
};

export default config;
