import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'

const MainLayout = () => {
  return (
    <>
  
    <Navbar />
     <main className="flex-grow-1">
    <Outlet /> 
     </main>
    <Footer />
</>

  
  )
}

export default MainLayout