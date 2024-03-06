import React from 'react'
import Logo from '../Logo'
import Topnav from './Topnav'
import Navigationlinks from './Navigationlinks'
const Navbar = () => {
  return (
    <div>
        <Topnav />
        <Logo/>
        <Navigationlinks/>
    </div>
  )
}

export default Navbar