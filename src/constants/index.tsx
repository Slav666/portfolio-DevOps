import { ProjectData, TestimonialData, Skills } from "../types";

export const projects: ProjectData[] = [
  {
    title: "Issue Tracker",
    description:
      "This project is a full-stack, production-grade issue-tracking application designed for managing and visualizing project issues efficiently. Key features include a comprehensive dashboard with charts, advanced filtering, sorting, and pagination options. The application supports secure user authentication, intuitive forms with validation, and full CRUD functionality, allowing seamless issue management. It connects to a MySQL database to ensure robust data handling and persistence. With a user-friendly interface and powerful backend, this issue tracker is tailored to streamline project workflows and enhance team collaboration.",
    image: "/issue-tracker.gif",
    code: "https://github.com/Slav666/issue-tracker",
    liveApp: "https://issue-tracker-henna-kappa.vercel.app/",
    technologies: [
      "/logoReact.png",
      "/typescript.svg",
      "/tailwindcss.svg",
      "/vercel.svg",
      "mysql-horizontal.svg",
      "prisma-2.svg",
      "radix-ui.svg",
    ],
  },
  {
    title: "Vue Jobs app",
    description:
      "This project was my introduction to Vue.js, where I focused on mastering the framework's fundamentals, including components, directives, lifecycle methods, and event handling.The application serves as a job management system, allowing users to: Add new jobs to the list, Update existing job details, Delete jobs from the list.A mock backend is implemented using JSON-Server, enabling seamless data handling and CRUD operations. Through this project, I strengthened my understanding of Vue.js core concepts and gained hands-on experience building a functional, user-friendly application.",
    image: "/vue-jobs.gif",
    code: "https://github.com/Slav666/issue-tracker",
    // liveApp: "https://issue-tracker-henna-kappa.vercel.app/",
    technologies: [
      "/logoReact.png",
      "/typescript.svg",
      "/tailwindcss.svg",
      "vuejs-icon.svg",
    ],
  },

  {
    title: "Bookshelf App",
    description:
      "This app serves as a straightforward bookshelf application, allowing users to register, log in, search for books, add them to their reading list, and subsequently move them to the 'read books' shelf or remove them altogether. The primary goal of developing this app was to acquire proficiency in React Query and explore its integration within a new Astrosat project.",
    image: "/book-shelf-app.gif",
    code: "https://github.com/Slav666/Bookshelf-app",
    technologies: [
      "/msw-icon.svg",
      "/tailwindcss.svg",
      "/logoReact.png",
      "/form.svg",
      "/react-query.svg",
    ],
  },
  {
    title: "Snake Game",
    description:
      "This is a re-creation of the classic Nokia game Snake II. I created this mostly as an exercise in functional programming and custom React hooks, but also for fun. The game includes all of the features of the original, such as: Wrapping when hitting walls or floor/ceiling, the snake's body growing each time he eats a gecko, the snake getting faster each time he eats a gecko, the snake's head turning to face the direction he is moving prevention of turning 180 degrees and a look-ahead hint of where the next gecko will appear",
    image: "/snake-game.gif",
    code: "https://github.com/Slav666/snake-game",
    liveApp: "https://snake-game-five-teal.vercel.app/",
    technologies: ["/logoReact.png", "/typescript.svg", "/sass-1.svg"],
  },
  {
    title: "This Portfolio Website",
    description:
      "This portfolio website comprises six main sections: a navigation bar, details about myself, a list of projects I have previously worked on, a compilation of the technologies I have experience with, testimonials, and contact information. The primary objective of developing this application was to enhance my knowledge of Tailwind CSS.",
    image: "/portfolio.gif",
    code: "https://github.com/Slav666/my-portfolio-web/pull/1",
    technologies: ["/logoReact.png", "next-icon.svg", "/tailwindcss.svg"],
  },
];

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote:
      "One of Slawomir's standout qualities is his dedication to continuous learning. He is always eager to stay updated with the latest industry trends and technologies, which reflects in the quality of his work. Slawomir is a strong team player, always willing to lend a hand and collaborate with others to achieve project goals.",
    image: "/Riki.png",
    name: "Riki",
    company: "Astrosat",
  },
  {
    id: 2,
    quote:
      "Slawomir is adaptable and quick to learn new technologies. He is not afraid to step outside his comfort zone to take on new challenges, which makes him an asset to any development team.",
    image: "/Steven.jpeg",
    name: "Steven",
    company: "Astrosat",
  },
];

export const skills: Skills[] = [
  { icon: "/logo-javascript.svg", tech: "JavaScript" },
  { icon: "/logoReact.png", tech: "React" },
  { icon: "/css3-icon.svg", tech: "CSS3" },
  { icon: "/material-ui-1.svg", tech: "Material UI" },
  { icon: "/typescript.svg", tech: "Typescript" },
  { icon: "/python-3.svg", tech: "Python" },
  { icon: "/django.svg", tech: "Django" },
  { icon: "/storybook-icon.svg", tech: "StoryBook" },
  { icon: "/jest-js-icon.svg", tech: "Unit Test" },
  { icon: "/cucumber-icon.svg", tech: "End-to-End Tests" },
  { icon: "/victory-icon.svg", tech: "Victory" },
  { icon: "/git-icon.svg", tech: "Git" },
  { icon: "/github-icon.svg", tech: "Github" },
  { icon: "/redux-logo.svg", tech: "Redux" },
  { icon: "/msw-icon.svg", tech: "Mock Service Worker" },
  { icon: "/react-testing-library-icon.svg", tech: "React Testing Library" },
  { icon: "/html-icon.svg", tech: "HTML5" },
  { icon: "/netlify.svg", tech: "Netlify" },
  { icon: "/gatsby-icon.svg", tech: "Gatsby" },
  { icon: "/deck-gl-logo.png", tech: "DeckGL" },
];

export const skillsCodeClan: Skills[] = [
  { icon: "/java-icon.svg", tech: "Java" },
  { icon: "/mocha-icon.svg", tech: "Mocha" },
  { icon: "/nodejs-icon.svg", tech: "Node JS" },
  { icon: "/sinatra-icon.svg", tech: "Sinatra" },
  { icon: "/spring-icon.svg", tech: "Spring" },
  { icon: "/sql-database-icon.svg", tech: "SQL - Data Base" },
];

export const infoData: string =
  "Hello, I’m Slawomir a front-end developer with a focus on GIS, currently based in Musselburgh, Scotland. With four years of experience in software development, I spent three and a half years at Astrosat, an innovative aerospace company, where I specialized in visualizing satellite data in mapping applications and creating custom tools to enhance data interaction. Though my role at Astrosat ended over a year ago, the skills and experience I gained continue to shape my work.As you explore this page, you’ll find concise summaries of my projects, each with direct links to live deployments and repositories. These examples highlight not only my technical expertise but also my commitment to building impactful, hands-on solutions.";
