import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import PostItem from './PostItem'

const Posts = () => {
    const [posts, setPosts] = useState(DummyPosts)

  return (
    <section className='posts'>
      {
        posts.map(({Image, authorId, category, title, des}, index) => <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} />)
      }
    </section>
  )
}

export default Posts
