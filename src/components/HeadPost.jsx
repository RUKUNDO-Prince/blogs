import React from 'react'
import { Link } from 'react-router-dom'
import { headPost } from '../data/data'
import HeadPostImage from '../assets/1.jpg'

const HeadPost = () => {
  return (
    <article className='head-post'>
        {
            headPost.map(({id, Image, authorId, title, des}, index) => {
                return (
                    <div key={id}>
                        <div className="post-image">
                            <img src={Image} alt="image" />
                        </div>
                        <div className="post-content">
                            <Link to={`posts/${authorId}`}>
                            <h3>{title}</h3>
                            </Link>
                            <p>{des}</p>
                        </div>
                    </div>
                )
            })
        }
    </article>
  )
}

export default HeadPost
