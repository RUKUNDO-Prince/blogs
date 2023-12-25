import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import PostDetailImage from '../assets/1.jpg'

const PostDetail = () => {
  return (
    <section>
      <div className="container post-detail-container">
        <div className="post-detail-top">
          <PostAuthor />
            <div className="post-detail-button">
              <Link to={'/posts/werwer/edit'} className='btn btn-primary btn-sm'>Edit</Link>
              <Link to={'/posts/werwer/delete'} className='btn btn-danger btn-sm'>Delete</Link>
            </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className='post-detail-image'>
          <img src={PostDetailImage} alt="img" />
        </div>
        <div className='post-detail-paragraph'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad vero architecto exercitationem deleniti sapiente iusto, accusamus recusandae voluptatem excepturi amet, commodi fugit tenetur consectetur esse deserunt reiciendis quidem dolor! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla in ducimus facilis doloremque nobis tempore fugiat? Possimus quae, provident iste rem facilis excepturi in incidunt suscipit temporibus aliquam quas!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad vero architecto exercitationem deleniti sapiente iusto, accusamus recusandae voluptatem excepturi amet, commodi fugit tenetur consectetur esse deserunt reiciendis quidem dolor! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla in ducimus facilis doloremque nobis tempore fugiat? Possimus quae, provident iste rem facilis excepturi in incidunt suscipit temporibus aliquam quas!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad vero architecto exercitationem deleniti sapiente iusto, accusamus recusandae voluptatem excepturi amet, commodi fugit tenetur consectetur esse deserunt reiciendis quidem dolor! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla in ducimus facilis doloremque nobis tempore fugiat? Possimus quae, provident iste rem facilis excepturi in incidunt suscipit temporibus aliquam quas!</p>
        </div>
      </div>
    </section>
  )
}

export default PostDetail
