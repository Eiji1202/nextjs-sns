"use client";
import clsx from "clsx";
import s from "./style.module.sass";
import PostBox, { PostFormData } from "./partials/PostBox/PostBox";
import { useEffect, useState } from "react";
import { Post as PostType } from "@/types";
import Post from "./partials/Post/Post";
import Loader from "@/components/atoms/Loader/Loader";
import { createPost, deletePost, fetchPosts } from "@/lib/api/posts/posts";
import { fetchUserData } from "@/lib/api/users/users";
import { UserDataType } from "@/utils/schema/user";
import { User } from "firebase/auth";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type Props = {
  className?: string;
  user: User | null | undefined;
};

const defaultValues: PostFormData = {
  content: "",
};

const Timeline: React.FC<Props> = ({ className, user }) => {
  const methods = useForm<PostFormData>({
    defaultValues,
    mode: "onChange",
  });

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [isCreatedPost, setIsCreatedPost] = useState(false);
  const [isDeletedPost, setIsDeletedPost] = useState(false);

  // DBから投稿データとユーザーデータを取得
  useEffect(() => {
    const getPosts = async () => {
      setIsFetchingPosts(true);
      const result = await fetchPosts();
      if (result.success) {
        setPosts(result.posts);
      } else {
        // eslint-disable-next-line no-console
        console.error("エラー:", result.error);
      }
      setIsFetchingPosts(false);
    };

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

    getPosts();
    getUserData();
  }, [user, isCreatedPost, isDeletedPost]);

  // 投稿を作成
  const handleCreatePost: SubmitHandler<PostFormData> = async (data) => {
    setIsCreatedPost(true);
    const result = await createPost({
      userId: userData!.userId,
      content: data.content,
    });
    if (result.success) {
      // eslint-disable-next-line no-console
      console.log("投稿が保存されました", result.data);
      methods.reset();
      setIsCreatedPost(false);
    } else {
      // eslint-disable-next-line no-console
      console.error("投稿の保存に失敗しました", result.error);
    }
  };

  // 記事を削除
  const handleDeletePost = async (postId: string) => {
    const isConfirmed = window.confirm("本当に削除しますか？");

    if (!isConfirmed) return;

    const result = await deletePost(postId);

    if (result.success) {
      // eslint-disable-next-line no-console
      console.log("投稿が削除されました");
      setIsDeletedPost(true);
    } else {
      // eslint-disable-next-line no-console
      console.error("投稿の削除に失敗しました:", result.error);
    }
  };

  return (
    <div className={clsx(s.timeline, className)}>
      <FormProvider {...methods}>
        <PostBox
          userData={userData}
          onClick={handleCreatePost}
        />
      </FormProvider>
      <hr className={s.hr} />
      {isFetchingPosts ? (
        <div className={s.loader}>
          <Loader size={24} />
        </div>
      ) : posts.length > 0 ? (
        posts.map((post, index) => (
          <Post
            key={index}
            postData={post}
            isDeletable={user?.uid === post.userId}
            onClick={handleDeletePost}
          />
        ))
      ) : (
        <p className={s.message}>まだ投稿がありません。</p>
      )}
    </div>
  );
};

export default Timeline;
