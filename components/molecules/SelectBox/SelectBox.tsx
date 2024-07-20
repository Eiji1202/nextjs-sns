import clsx from "clsx";
import s from "./SelectBox.module.sass";

type Option = {
  label: string;
  value: string | number;
};

interface Props {
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  options: Option[];
}

const SelectBox: React.FC<Props> = ({
  className,
  id,
  name,
  disabled,
  options,
}) => {
  const selectBoxClassNames = clsx(s.selectBox, className, {
    [s.disabled]: disabled === true,
  });

  return (
    <select
      id={id}
      name={name}
      className={selectBoxClassNames}
      disabled={disabled}
      autoFocus={false}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
