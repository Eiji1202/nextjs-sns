import SignUpForm from "@/components/organisms/SignUpForm/SignUpForm";
import s from "./style.module.sass";
import SignInForm from "@/components/organisms/SignInForm/SignInForm";

export default function Auth() {
  return (
    <div className={s.container}>
      <SignUpForm className={s.form} />
      <p className={s.or}>または</p>
      <SignInForm className={s.form} />
    </div>
  );
}
