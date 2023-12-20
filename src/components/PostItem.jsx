import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'

const PostItem = ({ postId, Image, authorId, category, title, des }) => {
  const shortTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;
  const shortDes = des.length > 145 ? des.substr(0, 145) + '...' : des;

  return (
    <article className='post'>
      <div className="post-image">
        <img src={Image} alt="image" />
      </div>
      <div className="post-content">
        <Link to={`posts/${postId}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDes}</p>
        <div className="post-footer">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className='btn btn-category'>{category}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem
