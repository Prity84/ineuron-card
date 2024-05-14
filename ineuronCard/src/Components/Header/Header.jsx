import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <nav>
        <div className='logo'>MyProject</div>
        <ul>
            <li> <a href="#">Home</a></li>
            <li> <a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <button className='btn'>SignUp</button>
        </ul>
    </nav>
    </>
  )
}

export default Header
