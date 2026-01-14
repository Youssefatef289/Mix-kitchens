import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import FloatingSocialIcons from '../FloatingSocialIcons/FloatingSocialIcons'
import SEO from '../SEO/SEO'
import PageTransition from '../PageTransition/PageTransition'

const Layout = () => {
  return (
    <>
      <SEO />
      <FloatingSocialIcons />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  )
}

export default Layout

