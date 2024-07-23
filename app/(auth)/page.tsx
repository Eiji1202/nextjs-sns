import SignUpForm from "@/components/organisms/SignUpForm/SignUpForm";
import s from "./style.module.sass";
import SignInForm from "@/components/organisms/SignInForm/SignInForm";
import Header from "@/components/organisms/Header/Header";

export default function Auth() {
  return (
    <div className={s.mainContainer}>
      <Header />
      <div className={s.formContainer}>
        <SignUpForm className={s.form} />
        <p className={s.or}>または</p>
        <SignInForm className={s.form} />
      </div>
    </div>
  );
}
