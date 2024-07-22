import { siteConfig } from "@/config/site";
import s from "./style.module.sass";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>{siteConfig.name}</h1>
    </header>
  );
};

export default Header;
