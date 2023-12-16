import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../pages/Home'
import PostDetail from '../pages/PostDetail'
import Author from '../pages/Author'
import AuthorPosts from '../pages/AuthorPosts'
import CategoryPosts from '../pages/categoryPosts'
import CreatePosts from '../pages/createPosts'
import Dashboard from '../pages/Dashboard'
import DeletePost from '../pages/DeletePost'
import EditPost from '../pages/EditPost'
import ErrorPage from '../pages/ErrorPage'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Author />} />
          <Route path='/' element={<AuthorPosts />} />
          <Route path='/' element={<CategoryPosts />} />
          <Route path='/' element={<CreatePosts />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/' element={<DeletePost />} />
          <Route path='/' element={<EditPost />} />
          <Route path='/' element={<ErrorPage />} />
          <Route path='/' element={<Login />} />
          <Route path='/' element={<Logout />} />
          <Route path='/' element={<PostDetail />} />
          <Route path='/' element={<Register />} />
          <Route path='/' element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>     
    </>
  )
}

export default Router
