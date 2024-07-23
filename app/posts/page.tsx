import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import s from "./style.module.sass";

export default function Posts() {
  return (
    <div className={s.posts}>
      <Sidebar />
    </div>
  );
}
