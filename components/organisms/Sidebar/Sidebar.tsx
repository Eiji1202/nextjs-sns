import React from "react";
import s from "./style.module.sass";
import { siteConfig } from "@/config/site";
import { sidebarMenus } from "@/config/sidebar";
import Title from "@/components/atoms/Title/Title";
import CustomLink from "@/components/molecules/CustomLink/CustomLink";
import clsx from "clsx";

type Props = {
  className?: string;
};

const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <aside className={clsx(s.sidebar, className)}>
      <Title
        title={siteConfig.name}
        className={s.title}
      />
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
