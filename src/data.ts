export type ProjectData = {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  liveApp: string;
  technologies: string[];
};

export type TestimonialData = {
  id: number;
  quote: string;
  image: string;
  name: string;
  company: string;
};

export type Skills = {
  icon: string;
  tech: string;
};

export const projects: ProjectData[] = [
  {
    title: "Victory dashboard",
    description:
      "This was a feature that I Astrosat front-end team was asked to do.The client had asked for a lot of functionality, and the data shapes from their APIs were fixed, which required the development of many custom transformer functions to map the data to the formats demanded by Victory, the charting library we chose to use.`Originally this project was in javascript but the purpose of myyy",
    image: "./victory-dashboard.gif",
    link: "https://reactbootcamp.com",
    code: "code",
    liveApp: "LiveApp",
    technologies: [
      "./msw-icon.svg",
      "./typescript.svg",
      "./form.svg",
      "./victory-icon.svg",
    ],
  },
  {
    title: "Chat GPT - clone",
    description:
      "This application incorporates a user account system seamlessly integrated with Auth0. Upon logging in, users encounter a user interface strikingly similar to the original ChatGPT, where they can access a list of previous chats and initiate new conversations. In the central part of the application, users can pose questions and receive responses from OpenAI, with all information stored using MongoDB.",
    image: "./chat-gpt.gif",
    link: "https://reactbootcamp.com",
    code: "code",
    liveApp: "LiveApp",
    technologies: [
      "./next-icon.svg",
      "./mongodb.svg",
      "./auth0.svg",
      "./tailwindcss.svg",
    ],
  },
  {
    title: "Book shelf App",
    description:
      "This app serves as a straightforward bookshelf application, allowing users to register, log in, search for books, add them to their reading list, and subsequently move them to the 'read books' shelf or remove them altogether. The primary goal of developing this app was to acquire proficiency in React Query and explore its integration within a new Astrosat project.",
    image: "./chat-gpt.gif",
    link: "https://reactbootcamp.com",
    code: "code",
    liveApp: "LiveApp",
    technologies: [
      "./msw-icon.svg",
      "./tailwindcss.svg",
      "./logoReact.png",
      "./form.svg",
      "./react-query.svg",
    ],
  },
  {
    title: "This portfolio website",
    description:
      "This portfolio website comprises six main sections: a navigation bar, details about myself, a list of projects I have previously worked on, a compilation of the technologies I have experience with, testimonials, and contact information. The primary objective of developing this application was to enhance my knowledge of Tailwind CSS.",
    image: "./chat-gpt.gif",
    link: "https://reactbootcamp.com",
    code: "code",
    liveApp: "LiveApp",
    technologies: [
      "./logoReact.png",
      "./icons/tailwindcss.svg",
      "./logo-javascript.svg",
    ],
  },
];

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote:
      "One of Slawomir's standout qualities is his dedication to continuous learning. He is always eager to stay updated with the latest industry trends and technologies, which reflects in the quality of his work. Slawomir is a strong team player, always willing to lend a hand and collaborate with others to achieve project goals.",
    image: "./Rory.jpeg",
    name: "x",
    company: "Astrosat",
  },
  {
    id: 2,
    quote:
      "Slawomir is adaptable and quick to learn new technologies. He is not afraid to step outside his comfort zone to take on new challenges, which makes him an asset to any development team.",
    image: "./Steven.jpeg",
    name: "Steven",
    company: "Astrosat",
  },
];

export const skills: Skills[] = [
  { icon: "./icons/logo-javascript.svg", tech: "JavaScript" },
  { icon: "./logoReact.png", tech: "React" },
  { icon: "./css3-icon.svg", tech: "CSS3" },
  { icon: "./material-ui-1.svg", tech: "Material UI" },
  { icon: "./typescript.svg", tech: "Typescript" },
  { icon: "./python-3.svg", tech: "Python" },
  { icon: "./django.svg", tech: "Django" },
  { icon: "./storybook-icon.svg", tech: "StoryBook" },
  { icon: "./jest-js-icon.svg", tech: "Unit Test" },
  { icon: "./cucumber-icon.svg", tech: "End-to-End Tests" },
  { icon: "./victory-icon.svg", tech: "Victory" },
  { icon: "./git-icon.svg", tech: "Git" },
  { icon: "./github-icon.svg", tech: "Github" },
  { icon: "./redux-logo.svg", tech: "Redux" },
  { icon: "./msw-icon.svg", tech: "Mock Service Worker" },
  { icon: "./react-testing-library-icon.svg", tech: "React Testing Library" },
  { icon: "./html-icon.svg", tech: "HTML5" },
  { icon: "./netlify.svg", tech: "Netlify" },
  { icon: "./gatsby-icon.svg", tech: "Gatsby" },
  { icon: "./deck-gl-logo.png", tech: "DeckGL" },
];

export const skillsCodeClan: Skills[] = [
  { icon: "./java-icon.svg", tech: "Java" },
  { icon: "./mocha-icon.svg", tech: "Mocha" },
  { icon: "./nodejs-icon.svg", tech: "Node JS" },
  { icon: "./sinatra-icon.svg", tech: "Sinatra" },
  { icon: "./spring-icon.svg", tech: "Spring" },
  { icon: "./sql-database-icon.svg", tech: "SQL - Data Base" },
];

export const infoData: string =
  "I'm Slawomir, a front-end developer with GIS expertise, currently based in Edinburgh, Scotland. I bring 5 years of experience in software development to the table, having dedicated the last 3.5 years to professional work at Astrosat, an aerospace firm in. At Astrosat, we specialize in visualizing satellite data in mapping applications and crafting customized tools for seamless interaction. As you scroll through this page, you'll discover concise descriptions of projects that not only showcase my skills but also provide links to standalone deploys and repositories for each, highlighting my practical knowledge and experience.";
