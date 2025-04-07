import { ProjectData, TestimonialData, Skills } from "../types";

export const projects: ProjectData[] = [
  {
    title:
      "DevOps: Full-Stack Web App Deployment on AWS ECS with Docker & MongoDB Atlas",
    description:
      "I am currently developing and deploying a full-stack web application on AWS using Elastic Container Service (ECS). The application consists of a React-based frontend and a Node.js backend, both running in Docker containers. The backend is connected to MongoDB Atlas, ensuring a managed and scalable database solution. To enhance performance and reliability, the frontend and backend communicate through an Application Load Balancer, which efficiently distributes traffic and ensures high availability. By leveraging AWS ECS, the application is designed for seamless scalability, resilience, and cloud-native deployment.",
    code: "https://github.com/Slav666/docker-compose-app",
    liveApp: "",
    technologies: [
      "/aws.png",
      "/docker.png",
      "/logoReact.png",
      "/mongodb.svg",
      "/nodejs-icon.svg",
    ],
    image: "/aws-architecture.png",
  },
  {
    title: "DevOps/Frontend: This Portfolio Website",
    description:
      "This portfolio website consists of six main sections: a navigation bar, an introduction about myself, a showcase of my past projects, a collection of technologies I have experience with, testimonials, and contact information.The primary goal of developing this application was to deepen my understanding of AWS S3 and GitHub Actions. Since the website is static, it is hosted on an S3 bucket, ensuring a cost-effective and scalable deployment. Additionally, GitHub Actions automates the deployment process by seamlessly updating the live version whenever new code is pushed to the main branch. In the future, I plan to enhance the site's security by addressing the 'Not Secure' warning, ensuring a fully secure browsing experience.",
    image: "/portfolio.gif",
    code: "https://github.com/Slav666/portfolio-DevOps",
    technologies: [
      "/aws.png",
      "/s3-bucket.jpeg",
      "/route53.png",
      "/CerMan.png",
      "/aws-cloudfront.png",
      "/git-actions.png",
      "/logoReact.png",
      "next-icon.svg",
      "/tailwindcss.svg",
    ],
  },
  // {
  //   title: "DevOps: Automated Next.js Deployment to Vercel with GitHub Actions",
  //   description:
  //     "This project automates the deployment of a Next.js application to Vercel using GitHub Actions. The workflow triggers on pushes to the main branch, automatically deploying the app to Vercel's production environment. It uses Vercel CLI and securely stores the Vercel token in GitHub Secrets. Features: Automated deployment: Deploys the app to Vercel whenever changes are pushed to the main branch. Security: The Vercel token is securely stored in GitHub Secrets. Transparency: Monitor deployment status directly from the GitHub Actions interface.",
  //   code: "https://github.com/Slav666/Next-starter/tree/main/.github/workflows",
  //   liveApp: "",
  //   technologies: [
  //     "/logoReact.png",
  //     "/typescript.svg",
  //     "/tailwindcss.svg",
  //     "/vercel.svg",
  //     "/git-actions.png",
  //   ],
  //   image: "/git-actions.png",
  // },
  {
    title: "DevOps: Full-Stack MERN App with Docker & Docker Compose",
    description:
      "This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) and fully containerized using Docker and Docker Compose for seamless deployment and scalability. The project follows a microservices-friendly architecture, making it easy to set up, run, and deploy across different environments.",
    code: "https://github.com/Slav666/docker-compose-app",
    liveApp: "",
    technologies: [
      "/docker.png",
      "/logoReact.png",
      "/nodejs-icon.svg",
      "/mongodb.svg",
    ],
    image: "/docker-compose.png",
  },
  {
    title: "Full-Stack: Issue Tracker",
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

export const devSkills: Skills[] = [
  { icon: "/linux.jpeg", tech: "Linux - Ubuntu" },
  { icon: "/bash.png", tech: "Bash" },
  { icon: "/docker.png", tech: "Docker" },
  {
    icon: "/aws.png",
    tech: "AWS",
  },
  { icon: "/git-actions.png", tech: "GitHub Actions" },
];

export const infoData: string =
  "Hello, I’m Slawomir, a DevOps and Cloud Engineer with a background in front-end development and GIS, currently based in Musselburgh, Scotland. With five years of experience in software development, I spent three and a half years at Astrosat, an innovative aerospace company, where I specialized in visualizing satellite data in mapping applications and developing custom tools to enhance data interaction. Over the past year, I’ve transitioned into DevOps and Cloud Engineering, gaining hands-on experience with AWS, containerization (Docker, Kubernetes), and CI/CD pipelines (GitHub Actions, GitLab CI/CD) to automate and streamline deployments.I’m passionate about cloud infrastructure, automation, and improving system reliability and currently expanding my expertise in Terraform and Ansible to further enhance my DevOps skill set.On this page, you’ll find concise summaries of my projects, showcasing my ability to bridge development and operations through automation, cloud solutions, and scalable architectures.Let’s connect—I’m open to opportunities where I can grow and contribute as a DevOps/Cloud Engineer.";
