import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import s from "./style.module.sass";
import Timeline from "@/components/organisms/Timeline/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "投稿一覧ページです",
};

export default function Posts() {
  return (
    <div className={s.container}>
      <Sidebar className={s.sidebar} />
      <Timeline className={s.timeline} />
    </div>
  );
}
