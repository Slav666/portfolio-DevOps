import React, { FC } from "react";
import Link from "next/link";
import { CustomLinkProps } from "@/types";

const CustomLink: FC<CustomLinkProps> = ({
  href,
  text,
  bgColor,
  textColor,
  additionalClasses,
}) => {
  const classes = `inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg ${bgColor} ${textColor} ${
    additionalClasses || ""
  }`;

  return (
    <Link href={href} className={classes}>
      {text}
    </Link>
  );
};

export default CustomLink;
