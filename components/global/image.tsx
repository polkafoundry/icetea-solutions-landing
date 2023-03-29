import clsx from "clsx";
import Image from "next/image";

interface Props {
  src: string;
  className?: string;
  alt: string;
  priority?: boolean;
  imageClass?: string;
}

export const ImageComponent = ({
  src,
  className,
  alt,
  priority,
  imageClass,
}: Props) => {
  return (
    <div className={clsx(className, "relative")}>
      <Image
        src={src}
        className={imageClass}
        fill
        sizes="auto"
        alt={alt}
        priority={priority}
      />
    </div>
  );
};
