import React from 'react'

const PostItem = ({ Image, authorId, category, title, des }) => {
  return (
    <article className='post'>
      <div className="post-image">
        <img src={Image} alt="" />
      </div>
    </article>
  )
}

export default PostItem
