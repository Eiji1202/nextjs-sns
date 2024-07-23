import Image from "next/image";
import clsx from "clsx";
import s from "./style.module.sass";

type Props = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

const ProfileIcon: React.FC<Props> = ({ src, alt, size = 60, className }) => {
  return (
    <div
      className={clsx(s.imageWrapper, className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={s.image}
      />
    </div>
  );
};

export default ProfileIcon;
