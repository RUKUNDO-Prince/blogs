import React from 'react'
import { Link } from 'react-router-dom'
import { HeadPost } from '../data/data'
import HeadPostImage from '../assets/1.jpg'

const HeadPost = () => {
  return (
    <article className='head-post'>
        {
            HeadPost.map(({id, Image, authorId, title, des}, index) => {
                return (
                    <div>
                        <div className="post-image">
                            <img src={HeadPostImage} alt="image" />
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
                    </div>
                )
            })
        }
    </article>
  )
}

export default HeadPost
