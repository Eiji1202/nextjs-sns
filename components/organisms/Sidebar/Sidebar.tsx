import React from "react";
import s from "./style.module.sass";
import { siteConfig } from "@/config/site";
import { sidebarMenus } from "@/config/sidebar";
import Title from "@/components/atoms/Title/Title";
import CustomLink from "@/components/molecules/CustomLink/CustomLink";

const Sidebar: React.FC = () => {
  return (
    <aside className={s.sidebar}>
      <Title title={siteConfig.name} />
      <ul className={s.ul}>
        {sidebarMenus.map((menu) => (
          <li className={s.li}>
            <CustomLink
              href={menu.url}
              className={s.link}
            >
              <menu.icon size={24} />
              <span className={s.menuName}>{menu.name}</span>
            </CustomLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
