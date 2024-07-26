import clsx from "clsx";
import s from "./style.module.sass";
import ErrorMessage, {
  Error,
} from "@/components/atoms/ErrorMessage/ErrorMessage";

type Option = {
  label: string;
  value: string | number;
};

type Props = {
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  error?: Error;
  options: Option[];
  selectedOption?: Option;
  onChange?: (_option: Option) => void;
};

const SelectBox: React.FC<Props> = ({
  className,
  id,
  name,
  disabled,
  error,
  options,
  selectedOption,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selected = options.find(
      (option) => option.value.toString() === selectedValue
    );
    if (selected && onChange) {
      onChange(selected);
    }
  };

  const selectBoxClassNames = clsx(s.selectBox, className, {
    [s.disabled]: disabled,
  });

  return (
    <div>
      <select
        id={id}
        name={name}
        className={selectBoxClassNames}
        disabled={disabled}
        autoFocus={false}
        value={selectedOption?.value}
        onChange={handleChange}
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
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default SelectBox;
