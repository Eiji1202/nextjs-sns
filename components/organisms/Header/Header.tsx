import { siteName } from "@/config/site";
import s from "./Header.module.sass";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>{siteName}</h1>
    </header>
  );
};

export default Header;
