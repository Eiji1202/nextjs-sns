import React from "react";
import clsx from "clsx";
import s from "./Button.module.sass";
import Loader from "@/components/atoms/Loader/Loader";

type Props = {
  label: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
  isLoading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  label,
  className,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "md",
  isLoading = false,
  onClick,
}) => {
  const buttonClassNames = clsx(s.button, className, {
    [s.primary]: variant === "primary",
    [s.secondary]: variant === "secondary",
    [s.outline]: variant === "outline",
    [s.xs]: size === "xs",
    [s.sm]: size === "sm",
    [s.md]: size === "md",
    [s.lg]: size === "lg",
    [s.disabled]: disabled || isLoading,
  });
  return (
    <button
      className={buttonClassNames}
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
    >
      {isLoading && <Loader />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
