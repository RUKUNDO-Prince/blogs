import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="contaner nav-container">
        <Link className='nav-logo' to={'/'}>
          <h3>Prince <span>Dev</span></h3>
        </Link>
        <ul className="nav-menu">
          <li><Link to={'/profile'}>Prince</Link></li>
          <li><Link to={'/create'}>Create Posts</Link></li>
          <li><Link to={'/authors'}>Authors</Link></li>
          <li><Link to={'/logout'}>Log Out</Link></li>
        </ul>

        <button className='nav-toggle-button'>
          <HiMiniBars3BottomLeft />
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  )
}

export default Header
