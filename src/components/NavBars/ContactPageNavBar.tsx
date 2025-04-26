import CustomNavBar from "../NavBars/customNavBar";
import { ArrowLeftIcon } from "@heroicons/react/solid";
const ContactPageNavBar = () => {
  return (
    <CustomNavBar
      brandHref="/"
      brandContent={
        <div className="bg-yellow-500 inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ">
          <ArrowLeftIcon className="w-4 h-4 ml-1 text-black" />
          <p className="text-black">Portfolio</p>
        </div>
      }
      navLinks={[
        { href: "https://github.com/Slav666", text: "GitHub" },
        {
          href: "https://www.linkedin.com/in/slawomir-dyk-b35ab1177/",
          text: "Linkedin",
        },
      ]}
      showPhone
      phoneNumber="07562760261"
    />
  );
};

export default ContactPageNavBar;
