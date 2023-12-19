import React from 'react'
import { Link } from 'react-router-dom'
import AuthorImage from '../assets/a1.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/user/:id`} className='post-author'>
      <div className="post-author-image">
        <img src={AuthorImage} alt="image" />
      </div>
      <div className="post-author-info">
        <h5>Lana White</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor
