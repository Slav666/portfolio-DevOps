"use client";
import React, { FC } from "react";
import Button from "../components/button/Button";
import ExternalLink from "../components/link/ExternalLink";
import {
  SectionWrapper,
  DescriptionSection,
  Title,
} from "../components/composite-components/composite-components";
import { ArrowRightIcon } from "@heroicons/react/solid";

import CustomLink from "../components/link/CustomLink";

const Contact: FC = () => {
  const buttonStyle =
    "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0";

  return (
    <div>
      <SectionWrapper>
        <div
          className="bg-gray-400 gap-4 flex-col text-center m-12 p-8 rounded-xl"
          id="contact"
        >
          <Title title="HOW TO CONTACT ME?" />
          <div className="flex flex-col items-center gap-3">
            <CustomLink
              href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/"
              text={
                <>
                  GO TO LINKEDIN
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </>
              }
              className={`bg-yellow-500 hover:bg-yellow-300 ${buttonStyle}`}
            />
            <button
              className={`bg-gray-500 hover:bg-blue-300 m-2 ${buttonStyle}`}
              onClick={() =>
                navigator.clipboard.writeText("slawomirdyk@gmail.com")
              }
            >
              COPY MY EMAIL
            </button>
            <DescriptionSection>
              MY PHONE NUMBER: 07562760261
            </DescriptionSection>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
export default Contact;
