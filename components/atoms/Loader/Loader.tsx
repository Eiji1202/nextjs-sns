import React from "react";
import { Loader as LoaderIcon } from "lucide-react";
import clsx from "clsx";
import s from "./Loader.module.sass";

type Props = {
  size?: number;
  className?: string;
};

const Loader: React.FC<Props> = ({ size = 20, className }) => {
  return (
    <LoaderIcon
      className={clsx(s.loader, className)}
      size={size}
    />
  );
};

export default Loader;
