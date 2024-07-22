"use client";
import FormLabel from "@/components/atoms/FormLabel/FormLabel";
import TextBox from "@/components/molecules/TextBox/TextBox";
import s from "./style.module.sass";
import clsx from "clsx";
import Button from "@/components/molecules/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { EMAIL_VALIDATION } from "@/utils/validations/email";
import { PASSWORD_VALIDATION } from "@/utils/validations/password";

export type SignInFormData = {
  email: string;
  password: string;
};

const defaultValues: SignInFormData = {
  email: "",
  password: "",
};

type Props = {
  className?: string;
};

const SignInForm: React.FC<Props> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues,
  });

  const validations = {
    email: EMAIL_VALIDATION,
    password: PASSWORD_VALIDATION,
  };

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1秒間の遅延
    console.log(data);
  };

  return (
    <form
      className={clsx(s.formContainer, className)}
      onSubmit={handleSubmit(handleSignIn)}
    >
      <h1 className={s.title}>ログイン</h1>
      <div className={s.inputWrapper}>
        <div className={s.flexCol}>
          <FormLabel
            htmlFor="email"
            required
            label="メールアドレス"
          />
          <TextBox
            placeholder="メールアドレス"
            error={errors.email}
            {...register("email", validations.email)}
          />
        </div>
        <div className={s.flexCol}>
          <FormLabel
            htmlFor="password"
            required
            label="パスワード"
          />
          <TextBox
            type="password"
            placeholder="パスワード"
            error={errors.password}
            {...register("password", validations.password)}
          />
        </div>
      </div>
      <div className={s.buttonWrapper}>
        <Button
          label="ログイン"
          variant="secondary"
          size="lg"
          className={s.button}
          type="submit"
          isLoading={isSubmitting}
        />
      </div>
    </form>
  );
};

export default SignInForm;
