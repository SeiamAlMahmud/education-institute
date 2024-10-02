import React from 'react'
import { NavbarWithMegaMenu } from '../components/NavbarWithMegaMenu/NavbarWithMegaMenu'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Root = () => {
  return (
    <div>
        <NavbarWithMegaMenu />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Root