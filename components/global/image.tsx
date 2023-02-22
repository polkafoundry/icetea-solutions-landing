import clsx from "clsx";
import Image from "next/image";

interface Props {
  src: string;
  className: string;
  alt: string;
  priority?: boolean;
}

export const ImageComponent = ({ src, className, alt, priority }: Props) => {
  return (
    <div className={clsx(className, "relative")}>
      <Image src={src} fill alt={alt} priority={priority} />
    </div>
  );
};
