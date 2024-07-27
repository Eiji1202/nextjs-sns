import { LucideIcon } from "lucide-react";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
  keywords: string[];
  authors: {
    name: string;
    url: string;
  }[];
};

export type SidebarMenu = {
  name: string;
  icon: LucideIcon;
  url: string;
};

export type Post = {
  postId: string;
  userId: string;
  username: string;
  content: string;
  profileIcon: string;
  createdAt: string;
};
