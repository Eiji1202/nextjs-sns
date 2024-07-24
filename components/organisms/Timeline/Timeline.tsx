import clsx from "clsx";
import s from "./style.module.sass";
import PostBox from "./partials/PostBox/PostBox";
import Post from "./partials/Post/Post";

type Props = {
  className?: string;
};

const Timeline: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(s.timeline, className)}>
      <PostBox />
      <hr className={s.hr} />
      {Array.from({ length: 3 }).map((_, i) => (
        <Post key={i} />
      ))}
      <Post />
    </div>
  );
};

export default Timeline;
