import Image from "next/image";
import { CircleImageProps } from "@/types";

const CircleImage = ({ src, alt }: CircleImageProps) => (
  <div className="flex justify-center items-center px-10 cursor-pointer">
    <div className="border-6 border-white rounded-full max-w-[30em] max-h-[30em] overflow-hidden">
      <Image
        alt={alt}
        src={src}
        height={500}
        width={500}
        placeholder="empty"
        className="object-cover"
      />
    </div>
  </div>
);

export default CircleImage;
