import { ReactNode } from "react";
import { SyntheticEvent } from "react";

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  liveApp: string;
  technologies: string[];
}

export interface TestimonialData {
  id: number;
  quote: string;
  image: string;
  name: string;
  company: string;
}

export interface Skills {
  icon: string;
  tech: string;
}

export interface CustomLinkProps {
  href: string;
  text: ReactNode;
  bgColor?: string;
  textColor: string;
  additionalClasses?: string | string[];
}

export interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export interface TestimonialsListProps {
  testimonials: TestimonialData[];
}

// export interface ButtonProps {
//   label: string;
//   type?: "submit" | undefined;
//   onClick?: (event: SyntheticEvent) => void;
//   disableHover?: boolean;
//   disabled?: boolean;
//   className?: string;
// }

export interface SkillWrapperProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export interface CircleImageProps {
  src: string;
  alt: string;
}
