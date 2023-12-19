import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import PostItem from './PostItem'

const Posts = () => {
    const [posts, setPosts] = useState(DummyPosts)

  return (
    <section className='posts'>
      {
        posts.map(({id, Image, authorId, category, title, des}, index) => 
            <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id} />
        )
      }
    </section>
  )
}

export default Posts
