import React, { FC } from "react";
import Link from "next/link";
import { CustomLinkProps } from "@/types";

const CustomLink: FC<CustomLinkProps> = ({
  href,
  text,
  className = "",
  target,
  rel,
}) => {
  const classes = `inline-flex border-0 p-1 mr-1 focus:outline-none rounded text-lg ${className}`;

  return (
    <Link href={href} className={classes} target={target} rel={rel}>
      {text}
    </Link>
  );
};

export default CustomLink;
