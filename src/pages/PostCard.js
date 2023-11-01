import React from "react";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="post-card">
        <div className="post-title">{post.title}</div>
        <div className="post-content">{post.content}</div>
      </div>
    </>
  );
};

export default PostCard;
