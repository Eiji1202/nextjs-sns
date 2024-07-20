import s from "./FormLabel.module.sass";
import clsx from "clsx";

export type Props = {
  label: string;
  htmlFor?: string;
  className?: string;
  required?: boolean;
};

const FormLabel: React.FC<Props> = ({
  htmlFor,
  label,
  className,
  required = false,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(s.label, className)}
    >
      <span>{label}</span>
      {required && <span className={s.required}>(必須)</span>}
    </label>
  );
};

export default FormLabel;
