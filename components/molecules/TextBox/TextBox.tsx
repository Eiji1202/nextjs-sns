import clsx from "clsx";
import s from "./TextBox.module.sass";

type Props = {
  type?: "text" | "password" | "email" | "number";
  name?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

const TextBox: React.FC<Props> = ({
  type,
  name,
  placeholder,
  required = false,
  disabled = false,
  className,
}) => {
  const inputClassNames = clsx(s.input, className, {
    [s.disabled]: disabled === true,
  });
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={inputClassNames}
      autoComplete="off"
      autoFocus={false}
      disabled={disabled}
    />
  );
};

export default TextBox;
