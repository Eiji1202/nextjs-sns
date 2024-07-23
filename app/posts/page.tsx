import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import s from "./style.module.sass";
import Timeline from "@/components/organisms/Timeline/Timeline";

export default function Posts() {
  return (
    <div className={s.container}>
      <Sidebar className={s.sidebar} />
      <Timeline className={s.timeline} />
    </div>
  );
}
