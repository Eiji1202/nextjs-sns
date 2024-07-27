"use client";
import s from "./style.module.sass";
import Textarea from "@/components/molecules/Textarea/Textarea";
import ProfileIcon from "@/components/molecules/ProfileIcon/ProfileIcon";
import Button from "@/components/molecules/Button/Button";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import { UserDataType } from "@/utils/schema/user";

type Props = {
  className?: string;
  userData: Pick<UserDataType, "userId" | "username" | "profileIcon"> | null;
  onClick: (_data: PostFormData) => void;
};

export type PostFormData = {
  content: string;
};

const PostBox: React.FC<Props> = ({ className, userData, onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useFormContext<PostFormData>();

  const count = watch("content").length;
  const charLimit = count === 0 || count > 140;

  const textareaValidation = {
    maxLength: {
      value: 140,
      message: "140文字以下で入力してください",
    },
  };

  return (
    <form
      className={clsx(s.postBox, className)}
      onSubmit={handleSubmit(onClick)}
    >
      <div className={s.profileWrapper}>
        <ProfileIcon
          src={userData?.profileIcon || "/dummyProfileIcon.png"}
          alt="プロフィール画像"
          className={s.profileIcon}
        />
        <p className={s.name}>{userData?.username}</p>
      </div>
      <Textarea
        placeholder="いまどうしてる？"
        {...register("content", textareaValidation)}
        error={errors.content}
        disabled={!userData}
      />
      <div className={s.buttonWrapper}>
        <span className={s.count}>{count}/140</span>
        <Button
          label="投稿"
          variant="primary"
          size="xs"
          type="submit"
          isLoading={isSubmitting}
          disabled={charLimit || isSubmitting}
        />
      </div>
    </form>
  );
};

export default PostBox;
