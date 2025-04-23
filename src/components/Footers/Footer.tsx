import CustomFooter from "../Footers/customFooter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const LandingPageFooter = () => {
  return (
    <CustomFooter
      brandText="MyPortfolioWeb"
      navLinks={[
        { href: "#about", text: "About" },
        { href: "#projects", text: "Projects" },
        { href: "#skills", text: "Skills" },
      ]}
      socialLinks={[
        {
          href: "https://www.linkedin.com/in/slawomir-dyk-b35ab1177/",
          icon: <FaLinkedin size={20} />,
          label: "LinkedIn",
        },
        {
          href: "https://github.com/Slav666",
          icon: <FaGithub size={20} />,
          label: "GitHub",
        },
      ]}
    />
  );
};
export default LandingPageFooter;
