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
import { USERNAME_VALIDATION } from "@/utils/validations/username";
import { EMAIL_VALIDATION } from "@/utils/validations/email";
import { PASSWORD_VALIDATION } from "@/utils/validations/password";
import { DATE_OF_BIRTH_VALIDATION } from "@/utils/validations/dateOfBirth";
import { GENDER_VALIDATION } from "@/utils/validations/gender";
import Title from "@/components/atoms/Title/Title";
import CustomLink from "@/components/molecules/CustomLink/CustomLink";

export type SignUpFormData = {
  username: string;
  email: string;
  password: string;
  profileIcon: FileList | null;
  dateOfBirth: {
    year: number;
    month: number;
    day: number;
  };
  gender: string;
  terms: boolean;
};

const defaultValues: SignUpFormData = {
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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues,
  });

  const validations = {
    username: USERNAME_VALIDATION,
    email: EMAIL_VALIDATION,
    password: PASSWORD_VALIDATION,
    profileIcon: {
      required: "プロフィール画像は必須です",
    },
    dateOfBirth: DATE_OF_BIRTH_VALIDATION,
    gender: GENDER_VALIDATION,
    terms: {
      required: "利用規約に同意してください",
    },
  };

  const handleSignUp: SubmitHandler<SignUpFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1秒間の遅延
    console.log(data);
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
            {...register("username", validations.username)}
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
            {...register("profileIcon", validations.profileIcon)}
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
              rules={validations.dateOfBirth.year}
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
              rules={validations.dateOfBirth.month}
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
              rules={validations.dateOfBirth.day}
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
            rules={validations.gender}
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
              rules={validations.terms}
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
