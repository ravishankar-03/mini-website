import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
const Auth = () => {
  return (
    <React.Fragment>
    <NavBar />
    <Outlet />
    <Footer />
</React.Fragment>
  )
}

export default Auth