"use client";
import React, { useEffect } from "react";
import s from "./style.module.sass";
import clsx from "clsx";
import SignUpForm from "../../organisms/SignUpForm/SignUpForm";
import SignInForm from "../../organisms/SignInForm/SignInForm";
import { auth } from "@/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

const Auth: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  // ユーザーの認証情報がある場合は投稿一覧ページに置き換える
  useEffect(() => {
    if (user) {
      router.replace("/posts");
    }
  }, [user, router]);

  return (
    <div className={clsx(s.container, className)}>
      <SignUpForm className={s.form} />
      <p className={s.or}>または</p>
      <SignInForm className={s.form} />
    </div>
  );
};

export default Auth;
