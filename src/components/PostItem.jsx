import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ postId, Image, authorId, category, title, des }) => {
  return (
    <article className='post'>
      <div className="post-image">
        <img src={Image} alt="" />
      </div>
      <div className="post-content">
        <Link to={`posts/${postId}`}></Link>
      </div>
    </article>
  )
}

export default PostItem
