import ContactForm from "../../components/form/form";
import ContactPageNaveBar from "../../components/NavBars/ContactPageNavBar";
import CustomPageFooter from "../../components/Footers/contactPageFooter";
const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#222]">
      <ContactPageNaveBar />
      <div className="flex-1">
        <ContactForm />
      </div>

      <CustomPageFooter />
    </div>
  );
};

export default ContactPage;
