import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../Navbar/NavBar'
import FooterBar from '../FooterBar/FooterBar'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'> 
        <NavBar/>
        <Outlet/>
        <FooterBar/>
    </div>
  )
}

export default Layout