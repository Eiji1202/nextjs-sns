import { Trash2 } from "lucide-react";
import s from "./style.module.sass";
import ProfileIcon from "@/components/molecules/ProfileIcon/ProfileIcon";
import clsx from "clsx";
import { Post as PostType } from "@/types";
clsx;

type Props = {
  className?: string;
  postData: PostType;
  isDeletable: boolean;
  onClick: (_postId: string) => void;
};

const Post: React.FC<Props> = ({
  className,
  postData: { username, profileIcon, content, createdAt, postId },
  isDeletable,
  onClick,
}) => {
  return (
    <>
      <div className={clsx(s.postContainer, className)}>
        <div className={s.leftWrapper}>
          <ProfileIcon
            src={profileIcon}
            alt="プロフィールアイコン"
            className={s.profileIcon}
          />
        </div>
        <div className={s.rightWrapper}>
          <p className={s.name}>{username}</p>
          <p className={s.postContent}>{content}</p>
          <div className={s.bottomWrapper}>
            <span className={s.date}>{createdAt}</span>
            {isDeletable && (
              <button
                className={s.button}
                onClick={() => onClick(postId)}
              >
                <Trash2 size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className={s.hr} />
    </>
  );
};

export default Post;
