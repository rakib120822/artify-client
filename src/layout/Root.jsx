import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div className='flex flex-col justify-between'>
      <Navbar/>
      <div className='flex-1'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Root
