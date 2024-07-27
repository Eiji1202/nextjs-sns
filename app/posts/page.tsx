import { Metadata } from "next";
import Posts from "@/components/pages/Posts/Posts";

export const metadata: Metadata = {
  title: "Posts",
  description: "投稿一覧ページです",
};

export default function PostsPage() {
  return <Posts />;
}
