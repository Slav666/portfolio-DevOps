import { ProjectData, TestimonialData, Skills } from "../types";

export const projects: ProjectData[] = [
  {
    title:
      "ITEM FINDER – SERVERLESS HOME INVENTORY APP (Starter for Scalable AWS Projects)",
    description:
      "Item Finder is a fullstack web application that allows users to track and manage items within their home. It provides functionality to add, view, edit, and delete items, each consisting of a name, location, and type. The frontend is built using Next.js (App Router) with TypeScript and Axios, and is deployed as a static website to AWS S3. It is connected to a custom subdomain (item-finder.sdyk-portfolio.co.uk), with HTTPS and SSL via AWS Certificate Manager (ACM) planned as the next step to ensure secure communication. The backend of the application is entirely serverless. It uses AWS Lambda functions exposed through API Gateway to handle requests, while DynamoDB serves as the NoSQL database for storing item data. Each item has a unique ID generated using UUID. The REST API supports full CRUD operations (GET, POST, PUT, DELETE), and handles CORS properly — including OPTIONS preflight requests — to allow smooth interaction with the frontend hosted on a different domain. This version of the application serves as a foundational base for future development. It is fully functional in its current state and showcases modern best practices in deploying static frontend applications and building scalable serverless backends. However, there are several important features planned to improve performance, scalability, and usability. One major next step is implementing pagination, which will prevent performance issues that could arise from fetching all items from the DynamoDB table at once as the dataset grows. Additionally, integration with Amazon CloudFront is planned to serve the frontend through a global CDN, improving speed and latency. Other future improvements include user authentication (e.g., via AWS Cognito), multi-tag or category support for items, enhanced search and filtering features, image uploads (using S3 pre-signed URLs), and possibly a mobile version using React Native. These enhancements will evolve the application from a simple inventory tracker into a more powerful and user-friendly home management tool.",
    code: "https://github.com/Slav666/home-organizer",
    liveApp: "http://item-finder.sdyk-portfolio.co.uk/",
    technologies: [
      "/aws.png",
      "/aws-dynamodb.svg",
      "/gateway.png",
      "/lambda.png",
      "/s3-bucket.jpeg",
      "/route53.png",
      "/aws-cloudfront.png",
      "/logoReact.png",
      // "/nodejs-icon.svg",
    ],
    image: "/home-org.png",
  },
  {
    title: "TASK TRACKER WITH AWS & TERRAFORM",
    description:
      "This is a completed fullstack task management application built with React on the frontend, AWS Lambda (Node.js) for the backend, and Amazon DynamoDB as the database. Users can add new tasks, view their task list, and delete completed items — offering a simple yet effective task management workflow. The main goal of this project was to deepen my skills in Infrastructure as Code (IaC) and hands-on serverless architecture design using AWS. I used Terraform to provision and manage the entire frontend infrastructure: S3 for static website hosting, CloudFront for global content delivery, Route 53 for custom domain configuration. The backend and database were built manually using the AWS Management Console. I implemented the backend logic with AWS Lambda functions (Node.js), integrated with API Gateway for frontend communication. I chose this serverless architecture for its low cost and automatic scalability. Amazon DynamoDB is used as the serverless database to store user data and task lists. The project is fully completed — the frontend, backend, and database are all deployed and running in a production environment on AWS. Through this project, I gained practical experience with AWS services, frontend infrastructure automation with Terraform, and serverless application design, while further strengthening my fullstack development skills.",
    code: "https://github.com/Slav666/Fullstack-aws-project",
    liveApp: "https://app.sdyk-portfolio.co.uk/",
    technologies: [
      "/aws.png",
      "/terraform-logo.png",
      "/aws-dynamodb.svg",
      "/gateway.png",
      "/lambda.png",
      "/s3-bucket.jpeg",
      "/route53.png",
      "/aws-cloudfront.png",
      "/logoReact.png",
      "/nodejs-icon.svg",
    ],
    image: "/project3.png",
  },
  {
    title: "THIS PORTFOLIO WEBSITE",
    description:
      "This portfolio website consists of six main sections: a navigation bar, an introduction about myself, a showcase of my past projects, a collection of technologies I have experience with, testimonials, and contact information. The primary goal of developing this application was to deepen my understanding of AWS services and CI/CD practices, particularly focusing on AWS S3 and GitHub Actions. Since the website is static, it is hosted on an S3 bucket, providing a cost-effective, highly available, and scalable deployment solution. GitHub Actions automates the deployment process by seamlessly updating the live version whenever new code is pushed to the main branch. To deliver a professional and secure user experience, I configured a custom domain (purchased via GoDaddy), managed DNS settings using AWS Route 53, and served the site through AWS CloudFront to improve global content delivery performance. SSL/TLS encryption is ensured with certificates provisioned via AWS Certificate Manager (ACM), allowing secure HTTPS access. Additionally, I implemented a dynamic contact form integrated with AWS services. Messages submitted through the form are processed via an AWS Lambda function and delivered to my email inbox using AWS Simple Email Service (SES), providing a secure and serverless way to manage user inquiries without exposing backend servers.In the future, I plan to further enhance the website’s performance, introduce basic monitoring (e.g., using AWS CloudWatch or third-party tools), and continue refining its design, accessibility, and responsiveness.",
    image: "/portimg.png",
    code: "https://github.com/Slav666/portfolio-DevOps",
    technologies: [
      "/aws.png",
      "/gateway.png",
      "/lambda.png",
      "/ses.png",
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
    title: "FULL-STACK MERN APP WITH DOCKER & DOCKER COMPOSE",
    description:
      "This is a simple full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) and fully containerized using Docker and Docker Compose for seamless deployment, scalability, and consistency across environments. The project follows a modular, microservices-friendly architecture, allowing for easy integration, maintenance, and future scaling. Each part of the stack runs in its own container, promoting isolation and reducing environment-related issues during development and deployment. This application is ideal for experimenting with DevOps practices, as it can be deployed locally, on cloud VMs, or orchestrated using ECS or Kubernetes. To run the project locally, please refer to the detailed instructions provided in the README file.",
    code: "https://github.com/Slav666/docker-compose-app",
    liveApp: "",
    technologies: [
      "/docker.png",
      "/logoReact.png",
      "/nodejs-icon.svg",
      "/mongodb.svg",
    ],
    image: "/dcompose.png",
  },
  {
    title: "FULL STACK ISSUE TRACKER APP",
    description:
      "This project is a full-stack, production-grade issue-tracking application built with Next.js and Prisma, designed to demonstrate end-to-end web development capabilities. It features a dynamic dashboard with interactive charts, as well as advanced filtering, sorting, and pagination to efficiently manage and visualize project issues. The application includes secure authentication, intuitive and responsive forms with validation, and complete CRUD functionality for streamlined issue tracking. It connects to a MySQL database via Prisma ORM, enabling type-safe queries and robust data persistence. While the app is not cloud-deployed, it serves as a strong example of modern full-stack development, showcasing skills in UI design, data modeling, and API integration using a cutting-edge framework and tooling",
    image: "/issue-tracker.gif",
    code: "https://github.com/Slav666/issue-tracker",
    // liveApp: "https://issue-tracker-henna-kappa.vercel.app/",
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
  { icon: "/material-ui-1.svg", tech: "MaterialUI" },
  { icon: "/typescript.svg", tech: "Typescript" },
  { icon: "/python-3.svg", tech: "Python" },
  { icon: "/django.svg", tech: "Django" },
  { icon: "/storybook-icon.svg", tech: "StoryBook" },
  { icon: "/jest-js-icon.svg", tech: "Jest" },
  { icon: "/cucumber-icon.svg", tech: "Cucumber" },
  { icon: "/victory-icon.svg", tech: "Victory" },
  { icon: "/git-icon.svg", tech: "Git" },
  { icon: "/github-icon.svg", tech: "Github" },
  { icon: "/redux-logo.svg", tech: "Redux" },
  { icon: "/msw-icon.svg", tech: "MSW" },
  { icon: "/react-testing-library-icon.svg", tech: "RTL" },
  { icon: "/html-icon.svg", tech: "HTML5" },
  { icon: "/netlify.svg", tech: "Netlify" },
];

export const skillsCodeClan: Skills[] = [
  { icon: "/java-icon.svg", tech: "Java" },
  { icon: "/mocha-icon.svg", tech: "Mocha" },
  { icon: "/nodejs-icon.svg", tech: "Node" },
  { icon: "/sinatra-icon.svg", tech: "Sinatra" },
  { icon: "/spring-icon.svg", tech: "Spring" },
  { icon: "/sql-database-icon.svg", tech: "SQL" },
];

export const devSkills: Skills[] = [
  { icon: "/linux.jpeg", tech: "Linux" },
  { icon: "/bash.png", tech: "Bash" },
  { icon: "/docker.png", tech: "Docker" },
  {
    icon: "/aws.png",
    tech: "AWS",
  },
  { icon: "/git-actions.png", tech: "G Actions" },
  { icon: "/Kubernetes-logo.svg", tech: "Kubernetes" },
  { icon: "/terraform-logo.png", tech: "Terraform" },
];

export const infoData: string =
  // "Hello, I’m Slawomir, a DevOps and Cloud Engineer with a background in front-end development and GIS, currently based in Musselburgh, Scotland. With five years of experience in software development, I spent three and a half years at Astrosat, an innovative aerospace company, where I specialized in visualizing satellite data in mapping applications and developing custom tools to enhance data interaction. Over the past year, I’ve transitioned into DevOps and Cloud Engineering, gaining hands-on experience with AWS, containerization (Docker, Kubernetes), and CI/CD pipelines (GitHub Actions, GitLab CI/CD) to automate and streamline deployments.I’m passionate about cloud infrastructure, automation, and improving system reliability and currently expanding my expertise in Terraform and Ansible to further enhance my DevOps skill set.On this page, you’ll find concise summaries of my projects, showcasing my ability to bridge development and operations through automation, cloud solutions, and scalable architectures.Let’s connect—I’m open to opportunities where I can grow and contribute as a DevOps/Cloud Engineer.";
  "Hello, I’m Slawomir, a versatile Front-End Developer and DevOps/Cloud Engineer based in Musselburgh, Scotland. With over five years of experience in software development — including three and a half years at Astrosat, an innovative aerospace company — I specialized in building interactive mapping applications and tools for satellite data visualization. In the past year, I have expanded my focus toward DevOps and Cloud Engineering, gaining hands-on experience with AWS, containerization (Docker, Kubernetes), and CI/CD automation (GitHub Actions, GitLab CI/CD). I am currently advancing my skills with Terraform and Ansible to build scalable and reliable cloud infrastructures. I remain passionate about front-end development, particularly crafting engaging and performant web applications. At the same time, I am actively seeking opportunities to contribute in both DevOps/Cloud Engineering and Front-End Development roles — bridging development and operations to deliver robust, automated, and user-centric solutions. On this page, you’ll find concise summaries of my projects, showcasing my ability to blend front-end expertise with cloud and infrastructure automation.Let’s connect — I’m open to opportunities where I can grow, innovate, and make an impact across both fields.";
