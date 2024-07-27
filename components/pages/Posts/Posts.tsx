"use client";
import React from "react";
import s from "./style.module.sass";
import clsx from "clsx";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import Timeline from "@/components/organisms/Timeline/Timeline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";

type Props = {
  className?: string;
};

const Posts: React.FC<Props> = ({ className }) => {
  const [user] = useAuthState(auth);

  return (
    <div className={clsx(s.container, className)}>
      <Sidebar
        className={s.sidebar}
        isSignedIn={!!user}
      />
      <Timeline
        className={s.timeline}
        user={user}
      />
    </div>
  );
};

export default Posts;
