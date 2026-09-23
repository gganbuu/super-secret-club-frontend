import React from 'react'
import { Outlet, useLoaderData } from 'react-router'
import NavBar from '../Navbar/NavBar'
import FooterBar from '../FooterBar/FooterBar'

const Layout = () => {
  const { user } = useLoaderData()
  return (
    <div className='flex flex-col min-h-screen'> 
        <NavBar user={user}/>
        <Outlet/>
        <FooterBar/>
    </div>
  )
}

export default Layout