import clsx from "clsx";
import s from "./style.module.sass";

type Props = {
  className?: string;
};

const Timeline: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(s.timeline, className)}>
      {/* タイムラインの内容 */}
    </div>
  );
};

export default Timeline;
