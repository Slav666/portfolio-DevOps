import CustomNavBar from "../NavBars/customNavBar";
import { ArrowRightIcon } from "@heroicons/react/solid";
const LandingPagNAvBar = () => {
  return (
    <CustomNavBar
      brandHref="#about"
      brandContent="Slawomir Dyk"
      navLinks={[
        { href: "#projects", text: "Past Work" },
        { href: "#skills", text: "Skills" },
        { href: "#testimonials", text: "Testimonials" },
      ]}
      buttonHref="/contact"
      buttonContent={
        <>
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </>
      }
    />
  );
};

export default LandingPagNAvBar;
