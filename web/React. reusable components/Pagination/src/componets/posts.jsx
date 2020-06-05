import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <ul className="list-group mb-5">
      {posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
