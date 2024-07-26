import s from "./style.module.sass";
import Header from "@/components/organisms/Header/Header";
import Auth from "@/components/pages/Auth/Auth";

export default function AuthPage() {
  return (
    <div className={s.mainContainer}>
      <Header />
      <Auth />
    </div>
  );
}
