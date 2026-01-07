import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import FloatingSocialIcons from '../FloatingSocialIcons/FloatingSocialIcons'
import SEO from '../SEO/SEO'

const Layout = () => {
  return (
    <>
      <SEO />
      <FloatingSocialIcons />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

