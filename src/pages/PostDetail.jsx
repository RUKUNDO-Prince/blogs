import React from 'react'
import PostAuthor from '../components/PostAuthor'

const PostDetail = () => {
  return (
    <section>
      <div className="container post-detail-container">
        <div className="post-detail-top">
          <PostAuthor />
        </div>
      </div>
    </section>
  )
}

export default PostDetail
