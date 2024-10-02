import React from 'react'
import { NavbarWithMegaMenu } from '../components/NavbarWithMegaMenu/NavbarWithMegaMenu'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <NavbarWithMegaMenu />
        <Outlet/>
    </div>
  )
}

export default Root