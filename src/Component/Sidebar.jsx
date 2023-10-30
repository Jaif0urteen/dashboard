import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTruckMoving, FaChalkboardTeacher } from 'react-icons/fa'
// import MasterGST from './MasterGST'
// import MasterUOM from './MasterUOM'
// import MasterBusinessType from './MasterBusinessType'
// import MasterPincode from './MasterPincode'
// import MasterBrandname from './MasterBrandname'
// import MasterTypeOfCompany from './MasterTypeOfCompany'


export default function Sidebar({ toggle }) {
  const [selected, setSelected] = useState('GST (%)')

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value)
  }

  return (
    <>
      {/* 
      <!-- ======= Sidebar ======= --> */}
      {/* { toggle && ( */}



      <aside id="sidebar" className="sidebar " >

        {/* <aside id="sidebar" class={open?"sidebar collapse":"sidebar"} > */}

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <Link className="nav-link " to="/admin-basic-info">
              <i><FaTruckMoving /></i>
              <span>Supplier Management</span>
            </Link>
          </li>

          <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i><FaChalkboardTeacher /></i>
          <span>Master Page</span>
          <i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to='/admin-master-gst-page'>
              <i class="bi bi-circle"></i><span>GST (%)</span>
            </Link>
          </li>
          <li>
            <Link to='/admin-master-uom-page'>
              <i class="bi bi-circle"></i><span>UOM</span>
            </Link>
          </li>
          <li>
            <Link to='/admin-master-business-type-page'>
              <i class="bi bi-circle"></i><span>Business Type</span>
            </Link>
          </li>
          <li>
            <Link to='/admin-master-pincode-page'>
              <i class="bi bi-circle"></i><span>Pincode</span>
            </Link>
          </li>
          <li>
            <Link to='/admin-master-brand-name-page'>
              <i class="bi bi-circle"></i><span>Brand Name</span>
            </Link>
          </li>
          <li>
            <Link to='/admin-master-type-of-company-page'>
              <i class="bi bi-circle"></i><span>Type of Company</span>
            </Link>
          </li>
        </ul>
      </li>
          
          {/* 
       <!-- End Dashboard Nav --> */}
        </ul>



      </aside>







      {/* )} */}
    </>
  )
}
