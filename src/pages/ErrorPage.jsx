import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section>
      <div className="error-center">
        <h2>Oops!</h2>
        <h3>This page is not found😟!</h3>
        <Link to={'/'} className='btn btn-primary'>Go Back To Home</Link>
      </div>
    </section>
  )
}

export default ErrorPage
