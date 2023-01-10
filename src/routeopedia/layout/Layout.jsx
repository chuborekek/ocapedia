import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainBody from '../components/MainBody'
import NavMenu from '../components/NavMenu'

const Layout = () => {
  return (<>
    <NavMenu/>
    {/* <MainBody/> */}
    <Outlet/>
    <Footer/>
    </>)
}

export default Layout