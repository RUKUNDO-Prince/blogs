import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import PostItems from './PostItems'

const Posts = () => {
    const [posts, setPosts] = useState(DummyPosts)

  return (
    <section className='posts'>
      {
        posts.map(() => <PostItem />)
      }
    </section>
  )
}

export default Posts
