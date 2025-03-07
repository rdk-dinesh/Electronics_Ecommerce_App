import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({auth}) => {
  return (
    auth ? <Outlet/> : <Navigate to='/signin'/>
  )
}

export default PrivateRoutes