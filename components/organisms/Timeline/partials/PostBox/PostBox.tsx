"use client";
import s from "./style.module.sass";
import Textarea from "@/components/molecules/Textarea/Textarea";
import ProfileIcon from "@/components/molecules/ProfileIcon/ProfileIcon";
import Button from "@/components/molecules/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";

type PostFormData = {
  textarea: string;
};

const defaultValues: PostFormData = {
  textarea: "",
};

const PostBox: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<PostFormData>({
    defaultValues,
    mode: "onChange",
  });

  const count = watch("textarea").length;
  const charLimit = count === 0 || count > 140;

  const textareaValidation = {
    maxLength: {
      value: 140,
      message: "140文字以下で入力してください",
    },
  };

  const handleCreatePost: SubmitHandler<PostFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
    console.log(data);
  };

  return (
    <form
      className={s.postBox}
      onSubmit={handleSubmit(handleCreatePost)}
    >
      <div className={s.profileWrapper}>
        <ProfileIcon
          src="vercel.svg"
          alt="vercel"
          className={s.profileIcon}
        />
        <p className={s.name}>vercelさん</p>
      </div>
      <Textarea
        placeholder="いまどうしてる？"
        {...register("textarea", textareaValidation)}
        error={errors.textarea}
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
