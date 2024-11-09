"use client";
import React, { FC } from "react";
import Button from "../components/button/Button";
import ExternalLink from "../components/link/ExternalLink";
import {
  SectionWrapper,
  DescriptionSection,
  Title,
} from "../components/composite-components/composite-components";

const Contact: FC = () => {
  return (
    <div>
      <SectionWrapper>
        <div
          className="bg-gray-300 gap-4 flex-col text-center m-4 p-8 rounded-xl"
          id="contact"
        >
          <Title title="How to contact me?" />
          <DescriptionSection>
            You can contact me via LinkedIn or email
          </DescriptionSection>
          <div className="flex flex-col items-center">
            <ExternalLink
              label="Go to LinkedIn"
              href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/"
            />
            <Button
              label="Copy email to clipboard"
              onClick={() =>
                navigator.clipboard.writeText("slawomirdyk@gmail.com")
              }
            />
            <DescriptionSection>
              My Phone Number: 07562760261
            </DescriptionSection>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
export default Contact;
