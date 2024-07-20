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
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={clsx(s.input, className)}
      autoComplete="off"
      autoFocus={false}
      disabled={disabled}
    />
  );
};

export default TextBox;
