import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
    <section>
      <div className="container post-detail-container">
        <div className="post-detail-top">
          <PostAuthor />
          <div className="post-detail-button">
            <div className="post-detail-button">
              <Link to={'/posts/werwer/edit'} className='btn btn-primary btn-sm'>Edit</Link>
              <Link to={'/posts/werwer/delete'} className='btn btn-danger btn-sm'>Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetail
