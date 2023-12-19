import React, { useState } from 'react'
import { DummyPosts } from '../data/data'

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
