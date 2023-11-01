import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTruckMoving, FaChalkboardTeacher } from 'react-icons/fa'


export default function Sidebar({ toggle }) {


  return (
    <>
      {/* 
      <!-- ======= Sidebar ======= --> */}
      {/* { toggle && ( */}



      <aside id="sidebar" className="sidebar" >

        {/* <aside id="sidebar" className={open?"sidebar collapse":"sidebar"} > */}

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <NavLink className="nav-link collapsed  "to="/admin-basic-info">
              <i><FaTruckMoving /></i>
              <span>Supplier Management</span>
            </NavLink>
          </li>

         

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i><FaChalkboardTeacher /></i>
              <span>Master's</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <NavLink to='/admin-master-gst-page'>
                  <i className="bi bi-circle"></i><span>GST (%)</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin-master-uom-page'>
                  <i className="bi bi-circle"></i><span>UOM</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin-master-business-type-page'>
                  <i className="bi bi-circle"></i><span>Business Type</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin-master-pincode-page'>
                  <i className="bi bi-circle"></i><span>Pincode</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin-master-brand-name-page'>
                  <i className="bi bi-circle"></i><span>Brand Name</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin-master-type-of-company-page'>
                  <i className="bi bi-circle"></i><span>Type of Company</span>
                </NavLink>
              </li>
            </ul>
          </li>

        </ul>



      </aside>







      {/* )} */}
    </>
  )
}
