import clsx from "clsx";
import s from "./style.module.sass";
import ErrorMessage, {
  Error,
} from "@/components/atoms/ErrorMessage/ErrorMessage";
import { forwardRef } from "react";

type Props = {
  name?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: Error;
  rows?: number;
  className?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      name,
      placeholder,
      required = false,
      disabled = false,
      error,
      rows = 3,
      className,
      ...rest
    },
    ref
  ) => {
    const textareaClassNames = clsx(s.textarea, className, {
      [s.disabled]: disabled,
    });

    return (
      <div>
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          className={textareaClassNames}
          autoComplete="off"
          autoFocus={false}
          disabled={disabled}
          ref={ref}
          rows={rows}
          {...rest}
        />
        {error && <ErrorMessage error={error} />}
      </div>
    );
  }
);

export default Textarea;
