import CustomLink from "../../components/link/CustomLink";
import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const ContactButton = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 " id="contact">
      <CustomLink
        href="/contact"
        text={
          <>
            HOW TO CONTACT ME?
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </>
        }
        // className={`bg-yellow-500 hover:bg-yellow-300 ${buttonStyle}`}
        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-xl hover:bg-yellow-300 transition duration-300"
      />
      {/* <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Contact me
      </button> */}
    </div>
  );
};

export default ContactButton;
