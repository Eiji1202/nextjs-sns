"use client";
import s from "./style.module.sass";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import clsx from "clsx";

type Props = {
  className?: string;
  disabled?: boolean;
};

const SignOutButton: React.FC<Props> = ({ className, disabled }) => {
  const router = useRouter();
  const logOut = async () => {
    const isConfirmed = window.confirm("ログアウトしますか？");
    if (!isConfirmed) return;

    try {
      await signOut(auth);
      // eslint-disable-next-line no-console
      console.log("ユーザーがログアウトしました");
      router.push("/");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("ログアウトエラー:", error);
    }
  };

  const buttonClassNames = clsx(s.button, className, {
    [s.disabled]: disabled,
  });

  return (
    <button
      className={buttonClassNames}
      onClick={logOut}
    >
      <LogOut size={24} />
      <span className={s.label}>ログアウト</span>
    </button>
  );
};

export default SignOutButton;
