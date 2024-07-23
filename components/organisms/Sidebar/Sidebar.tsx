import React from "react";
import s from "./style.module.sass";
import { siteConfig } from "@/config/site";
import { sidebarMenus } from "@/config/sidebar";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className={s.sidebar}>
      <h1 className={s.title}>{siteConfig.name}</h1>
      <ul className={s.ul}>
        {sidebarMenus.map((menu) => (
          <li className={s.li}>
            <Link
              href={menu.url}
              className={s.link}
            >
              <menu.icon size={24} />
              <span className={s.menuName}>{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
