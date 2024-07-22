import clsx from "clsx";
import s from "./style.module.sass";
import type { FieldError } from "react-hook-form";

export type Error = Partial<FieldError>;
type Props = {
  className?: string;
  error: Error;
};

const ErrorMessage: React.FC<Props> = ({ className, error }) => {
  const errorClassNames = clsx(s.error, className);
  return (
    <p
      className={errorClassNames}
      role="alert"
    >
      {error.message}
    </p>
  );
};

export default ErrorMessage;
