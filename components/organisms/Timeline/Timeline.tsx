"use client";
import clsx from "clsx";
import s from "./style.module.sass";
import PostBox from "./partials/PostBox/PostBox";
import { useEffect, useState } from "react";
import { Post as PostType } from "@/types";
import Post from "./partials/Post/Post";
import Loader from "@/components/atoms/Loader/Loader";
import { fetchPosts } from "@/lib/api/posts/posts";
import { fetchUserData } from "@/lib/api/users/users";
import { UserDataType } from "@/utils/schema/user";
import { User } from "firebase/auth";

type Props = {
  className?: string;
  user: User | null | undefined;
};


  const [userData, setUserData] = useState<UserDataType | null>(null);

  useEffect(() => {

    const getUserData = async () => {
      if (user) {
        const result = await fetchUserData(user.uid);
        if (result.success) {
          setUserData(result.userData);
        } else {
          // eslint-disable-next-line no-console
          console.error("ユーザー情報の取得に失敗しました", result.error);
        }
      }
    };

    getUserData();
  }, [user]);

  return (
    <div className={clsx(s.timeline, className)}>
      <PostBox userData={userData} />
      <hr className={s.hr} />
      {Array.from({ length: 3 }).map((_, i) => (
        <Post key={i} />
      ))}
      <Post />
    </div>
  );
};

export default Timeline;
