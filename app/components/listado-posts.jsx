import React from "react";
import Post from "./post";
import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function ListadoPosts({ posts }) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts?.map((post) => (
          <Post key={post?.id} post={post?.attributes} />
        ))}
      </div>
    </>
  );
}

export default ListadoPosts;
