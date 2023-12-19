import React from 'react'

const PostItem = ({ Image,  }) => {
  return (
    <article className='post'>
      <div className="post-image">
        <img src={Image} alt="" />
      </div>
    </article>
  )
}

export default PostItem
