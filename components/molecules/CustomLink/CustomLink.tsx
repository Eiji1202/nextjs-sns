import React, { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import s from "./style.module.sass";

type Props = {
  href: string;
  className?: string;
  color?: "black" | "blue";
  target?: "_blank" | "_self" | "_parent" | "_top";
  underline?: boolean;
  children: ReactNode;
  disabled?: boolean;
  opacity?: boolean;
};

const CustomLink: React.FC<Props> = ({
  href,
  className,
  color = "black",
  target = "_self",
  underline,
  children,
  disabled,
  opacity = false,
}) => {
  const linkClassNames = clsx(s.link, className, {
    [s.blue]: color === "blue",
    [s.disabled]: disabled,
    [s.underline]: underline,
    [s.opacity]: opacity,
  });

  return (
    <Link
      href={href}
      className={linkClassNames}
      target={target}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
