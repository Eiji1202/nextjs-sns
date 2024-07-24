import { Trash2 } from "lucide-react";
import s from "./style.module.sass";
import ProfileIcon from "@/components/molecules/ProfileIcon/ProfileIcon";

const Post: React.FC = () => {
  return (
    <>
      <div className={s.postContainer}>
        <div className={s.leftWrapper}>
          <ProfileIcon
            src="vercel.svg"
            alt="vercel"
            className={s.profileIcon}
          />
        </div>
        <div className={s.rightWrapper}>
          <p className={s.name}>Vercelさん</p>
          <p className={s.postContent}>
            {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            voluptatem!`}
          </p>
          <div className={s.bottomWrapper}>
            <span className={s.date}>2024/07/24 02:00</span>
            <button className={s.button}>
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
      <hr className={s.hr} />
    </>
  );
};

export default Post;
