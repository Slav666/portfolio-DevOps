import React from "react";
import ContactForm from "@/components/form/form";
import ContactPageNavBar from "../../components/NavBars/ContactPageNavBar";
import ContactPageFooter from "../../components/Footers/contactPageFooter";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#222]">
      <ContactPageNavBar />
      <ContactForm />
      <ContactPageFooter />
    </div>
  );
};
export default ContactPage;
