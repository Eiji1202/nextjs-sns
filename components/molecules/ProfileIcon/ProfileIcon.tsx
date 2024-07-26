import Image from "next/image";
import clsx from "clsx";
import s from "./style.module.sass";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const ProfileIcon: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={clsx(s.imageWrapper, className)}>
      <Image
        src={src}
        alt={alt}
        className={s.image}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ProfileIcon;
