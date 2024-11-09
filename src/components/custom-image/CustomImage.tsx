import { FC } from "react";
import Image, { ImageProps } from "next/image";

interface ResponsiveImageProps
  extends Omit<ImageProps, "width" | "height" | "layout"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  src,
  alt,
  width = 600,
  height = 400,
  className = "w-full",
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default ResponsiveImage;
