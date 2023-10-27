import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

  return (
    <>
      <nav className="navbar bg-body-tertiary ms-1 ">
        <form className="container-fluid justify-content-start " >

          <h6 className="me-5 poppins-font "><NavLink to="/admin-basic-info" className={({ isActive }) => (isActive ? "link-active " : " ")}  >Basic Info </NavLink></h6>

          <h6 className="me-5 poppins-font   "><NavLink to="/admin-billing-details" className={({ isActive }) => (isActive ? "link-active" : " ")}  >Billing Details</NavLink></h6>

          <h6 className="me-5 poppins-font   "><NavLink to="/admin-contact-details" className={({ isActive }) => (isActive ? "link-active" : " ")}  >Contact Details</NavLink></h6>

          <h6 className="me-5 poppins-font   "><NavLink to="/admin-additional-details" className={({ isActive }) => (isActive ? "link-active" : " ")}  >Additional Details</NavLink></h6>
        </form>
      </nav>
    </>
  )
}


// className=" me-md-5 me-1 "
// className=" me-md-5 me-1"
// className=" me-md-5 me-1 mt-md-0 mt-3"
// className=" me-md-5 me-1 mt-md-0 mt-3"