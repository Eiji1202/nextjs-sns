import clsx from "clsx";
import s from "./TextBox.module.sass";
import ErrorMessage, {
  Error,
} from "@/components/atoms/ErrorMessage/ErrorMessage";
import { forwardRef } from "react";

type Props = {
  type?: "text" | "password" | "email" | "number";
  name?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: Error;
  className?: string;
};

const TextBox = forwardRef<HTMLInputElement, Props>(
  (
    {
      type,
      name,
      placeholder,
      required = false,
      disabled = false,
      error,
      className,
      ...rest
    },
    ref
  ) => {
    const inputClassNames = clsx(s.input, className, {
      [s.disabled]: disabled,
    });

    return (
      <>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={inputClassNames}
          autoComplete="off"
          autoFocus={false}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        {error && <ErrorMessage error={error} />}
      </>
    );
  }
);

export default TextBox;
