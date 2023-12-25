import React, { useState } from "react";
import { DummyPosts } from "../data/data";
import PostItem from "../components/PostItem";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="author-posts">
      
      {posts.length > 0 ? (
        <div className="container author-posts-container">
          {posts.map(({ id, Image, authorId, category, title, des }, index) => (
            <PostItem
              key={index}
              Image={Image}
              category={category}
              authorId={authorId}
              title={title}
              des={des}
              postId={id}
            />
          ))}
        </div>
      ) : (
        <h2 className="error-center">No posts yet!</h2>
      )}
    </section>
  )
}

export default AuthorPosts
