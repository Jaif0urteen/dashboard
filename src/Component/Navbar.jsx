import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav class="navbar bg-body-tertiary ms-1 ">
  <form class="container-fluid justify-content-start " >
    <h4 class="me-5"><NavLink to="/admin-basic-info" className={({ isActive }) => (isActive ? "link-active" : " ")}  >Basic Info </NavLink></h4>
    <h4 class="me-5 "><NavLink to="/admin-billing-details" className={({ isActive }) => (isActive ? "link-active" : " ")}  >Billing Details</NavLink></h4>
    <h4 class="me-5 "><NavLink to="/admin-contact-details" className={({ isActive }) => (isActive ? "link-active" : " ")}  >Contact Details</NavLink></h4>
    <h4 class="me-5 "><NavLink to="/admin-additional-details" className={({ isActive }) => (isActive ? "link-active" : " ")}  >Additional Details</NavLink></h4>
  </form>
</nav>
    </>
  )
}


// class=" me-md-5 me-1 "
// class=" me-md-5 me-1"
// class=" me-md-5 me-1 mt-md-0 mt-3"
// class=" me-md-5 me-1 mt-md-0 mt-3"