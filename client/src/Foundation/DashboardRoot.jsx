import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardRoot = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default DashboardRoot