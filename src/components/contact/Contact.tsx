import React, { FC } from "react";
import CustomLink from "../CustomLink";

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="container mx-auto flex flex-col items-center bg-slate-400 m-4 max-w-prose p-4 rounded"
    >
      <h2 className="text-2xl">How to contact me?</h2>
      <p>
        I look forward to hearing from you. You can contact me via LinkedIn,
        Email or Phone.
      </p>
      <div className="p-2">
        <CustomLink
          href="mailto:slawomirdyk@gmail.com"
          text="Send Email"
          textColor="black"
          additionalClasses="hover:bg-blue-700 bg-indigo-500"
        />
      </div>
      <div>
        <CustomLink
          href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/"
          text="Send me a message by LinkedIn"
          textColor="black"
          additionalClasses="hover:bg-blue-700 bg-indigo-500 rounded"
        />
      </div>
      <div>My Phone Number: 07562760261</div>
    </section>
  );
};
export default Contact;
