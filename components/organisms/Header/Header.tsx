import { siteConfig } from "@/config/site";
import s from "./style.module.sass";
import Title from "@/components/atoms/Title/Title";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Title
        title={siteConfig.name}
        className={s.title}
      />
    </header>
  );
};

export default Header;
