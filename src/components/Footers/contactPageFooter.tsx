import { FaLinkedin, FaGithub } from "react-icons/fa";
import CustomFooter from "../Footers/customFooter";
const ContactPageFooter = () => {
  return (
    <CustomFooter
      brandText="Main Page"
      navLinks={[]}
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

export default ContactPageFooter;
