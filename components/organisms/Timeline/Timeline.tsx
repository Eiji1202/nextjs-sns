import clsx from "clsx";
import s from "./style.module.sass";
import PostBox from "./partials/PostBox/PostBox";

type Props = {
  className?: string;
};

const Timeline: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(s.timeline, className)}>
      <PostBox />
      <hr className={s.hr} />
    </div>
  );
};

export default Timeline;
