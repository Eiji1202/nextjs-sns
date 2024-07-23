import clsx from "clsx";
import s from "./style.module.sass";

type Props = {
  title: string;
  className?: string;
};

const Title: React.FC<Props> = ({ title, className }) => {
  return <h1 className={clsx(s.title, className)}>{title}</h1>;
};

export default Title;
