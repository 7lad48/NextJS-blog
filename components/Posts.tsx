import React from "react";
import Link from "next/link";
import { PostType } from "@/app/blog/page";

type PostsPropsType = {
  posts: PostType[]
}
function Posts({posts}: PostsPropsType) {
  return (
    <ul>
      {posts.map((post: PostType) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>))}
    </ul>
  );
}

export default Posts;