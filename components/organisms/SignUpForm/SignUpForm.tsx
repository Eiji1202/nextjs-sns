"use client";
import FormLabel from "@/components/atoms/FormLabel/FormLabel";
import TextBox from "@/components/molecules/TextBox/TextBox";
import s from "./style.module.sass";
import clsx from "clsx";
import SelectBox from "@/components/molecules/SelectBox/SelectBox";
import {
  daysOption,
  monthsOption,
  yearsOption,
} from "@/utils/array/dateOfBirth/options";
import { genderOptions } from "@/utils/array/gender/options";
import Button from "@/components/molecules/Button/Button";
import { termsUrl } from "@/config/site";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "@/components/atoms/ErrorMessage/ErrorMessage";
import Title from "@/components/atoms/Title/Title";
import CustomLink from "@/components/molecules/CustomLink/CustomLink";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchemaClient } from "@/utils/schema/signUp";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/api/auth/signUp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

type SignUpFormSchema = z.infer<typeof signUpSchemaClient>;

const defaultValues: SignUpFormSchema = {
  username: "",
  email: "",
  password: "",
  profileIcon: null,
  dateOfBirth: {
    year: 0,
    month: 0,
    day: 0,
  },
  gender: "",
  terms: false,
};

type Props = {
  className?: string;
};

const SignUpForm: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchemaClient),
    defaultValues,
  });

  const handleSignUp: SubmitHandler<SignUpFormSchema> = async (data) => {
    const result = await signUp(data);
    if (result.success) {
      // eslint-disable-next-line no-console
      console.log("ユーザー登録に成功しました", result.data);

      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        router.push("/posts");
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("サインインに失敗しました:", error);
      }
    } else {
      // eslint-disable-next-line no-console
      console.error("ユーザー登録に失敗しました", result.error);
    }
  };

  return (
    <form
      className={clsx(s.formContainer, className)}
      onSubmit={handleSubmit(handleSignUp)}
    >
      <Title
        title="新規ユーザー登録"
        className={s.title}
      />
      <div className={s.inputWrapper}>
        <div className={s.flexCol}>
          <FormLabel
            htmlFor="username"
            required
            label="ユーザー名"
          />
          <TextBox
            type="text"
            placeholder="ユーザー名"
            {...register("username")}
            error={errors.username}
          />
        </div>
        <div className={s.flexCol}>
          <FormLabel
            htmlFor="email"
            required
            label="メールアドレス"
          />
          <TextBox
            placeholder="メールアドレス"
            error={errors.email}
            {...register("email")}
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
            {...register("password")}
          />
        </div>
        <div className={s.flexCol}>
          <FormLabel
            htmlFor="profileIcon"
            label="プロフィール画像"
            required
          />
          <input
            className={s.file}
            type="file"
            id="profileIcon"
            accept="image/*"
            {...register("profileIcon")}
          />
          {errors.profileIcon && <ErrorMessage error={errors.profileIcon} />}
        </div>
        <div className={s.flexCol}>
          <FormLabel
            htmlFor="dateOfBirth"
            required
            label="生年月日"
          />
          <div className={s.selectBoxWrapper}>
            <Controller
              control={control}
              name="dateOfBirth.year"
              render={({ field: { onChange, value } }) => (
                <SelectBox
                  options={yearsOption}
                  className={s.selectBox}
                  error={errors.dateOfBirth?.year}
                  selectedOption={yearsOption.find(
                    (option) => option.value === value
                  )}
                  onChange={(option) => onChange(option.value)}
                />
              )}
            />
            <Controller
              control={control}
              name="dateOfBirth.month"
              render={({ field: { onChange, value } }) => (
                <SelectBox
                  options={monthsOption}
                  className={s.selectBox}
                  error={errors.dateOfBirth?.month}
                  selectedOption={monthsOption.find(
                    (option) => option.value === value
                  )}
                  onChange={(option) => onChange(option.value)}
                />
              )}
            />
            <Controller
              control={control}
              name="dateOfBirth.day"
              render={({ field: { onChange, value } }) => (
                <SelectBox
                  options={daysOption}
                  className={s.selectBox}
                  error={errors.dateOfBirth?.day}
                  selectedOption={daysOption.find(
                    (option) => option.value === value
                  )}
                  onChange={(option) => onChange(option.value)}
                />
              )}
            />
          </div>
        </div>
        <div className={s.flexCol}>
          <FormLabel
            htmlFor="gender"
            required
            label="性別"
          />
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => (
              <SelectBox
                options={genderOptions}
                className={s.selectBox}
                error={errors.gender}
                selectedOption={genderOptions.find(
                  (option) => option.value === value
                )}
                onChange={(option) => onChange(option.value)}
              />
            )}
          />
        </div>
        <div>
          <div className={s.terms}>
            <Controller
              control={control}
              name="terms"
              render={({ field }) => (
                <input
                  type="checkbox"
                  id="terms"
                  {...field}
                  value={field.value.toString()}
                />
              )}
            />
            <label htmlFor="terms">
              <CustomLink
                href={termsUrl}
                className={s.termsLink}
                target="_blank"
                underline
                color="blue"
                opacity
              >
                利用規約
              </CustomLink>
              に同意する
            </label>
          </div>
          {errors.terms && <ErrorMessage error={errors.terms} />}
        </div>
      </div>
      <div className={s.buttonWrapper}>
        <Button
          label="登録"
          variant="primary"
          size="lg"
          className={s.button}
          type="submit"
          isLoading={isSubmitting}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
