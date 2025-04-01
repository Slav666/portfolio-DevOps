import { FC } from "react";
import Image, { ImageProps } from "next/image";

interface IconImageProps extends Omit<ImageProps, "width" | "height"> {
  src: string;
  alt: string;
  className?: string;
}

const IconImage: FC<IconImageProps> = ({
  src,
  alt,
  className = "w-12 h-12",
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={20}
      height={20}
      {...props}
    />
  );
};

export default IconImage;
