import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import FloatingSocialIcons from '../FloatingSocialIcons/FloatingSocialIcons'

const Layout = () => {
  return (
    <>
      <FloatingSocialIcons />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

