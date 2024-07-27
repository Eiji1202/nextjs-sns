import React from "react";
import s from "./style.module.sass";
import { siteConfig } from "@/config/site";
import { sidebarMenus } from "@/config/sidebar";
import Title from "@/components/atoms/Title/Title";
import CustomLink from "@/components/molecules/CustomLink/CustomLink";
import clsx from "clsx";
import SignOutButton from "./partials/SignOutButton/SignOutButton";

type Props = {
  className?: string;
  isSignedIn: boolean;
};

const Sidebar: React.FC<Props> = ({ className, isSignedIn }) => {
  return (
    <aside className={clsx(s.sidebar, className)}>
      <Title
        title={siteConfig.name}
        className={s.title}
      />
      <ul className={s.ul}>
        {sidebarMenus.map((menu, index) => (
          <li
            className={s.li}
            key={index}
          >
            <CustomLink
              href={menu.url}
              className={s.link}
              disabled={!isSignedIn}
            >
              <menu.icon size={24} />
              <span className={s.menuName}>{menu.name}</span>
            </CustomLink>
          </li>
        ))}
        <li className={s.li}>
          <SignOutButton disabled={!isSignedIn} />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
