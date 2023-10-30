import React from 'react'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicInfo from './Component/BasicInfo'
import BillingDetails from './Component/BillingDetails'
import ContactDetails from './Component/ContactDetails'
import AdditionalDetails from './Component/AdditionalDetails'

import MasterUOM from './Component/MasterUOM'
import MasterBusinessType from './Component/MasterBusinessType'
import MasterPincode from './Component/MasterPincode'
import MasterBrandname from './Component/MasterBrandname'
import MasterTypeOfCompany from './Component/MasterTypeOfCompany'


import './assets/css/style1.css'
import MasterGST from './Component/MasterGST'

export default function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Sidebar />}/>


      <Route path='/admin-basic-info' element={<BasicInfo/>}/>
      <Route path='/admin-billing-details' element={<BillingDetails/>}/>
      <Route path='/admin-contact-details' element={<ContactDetails/>}/>
      <Route path='/admin-additional-details' element={<AdditionalDetails/>}/>


      <Route path='/admin-master-gst-page' element={<MasterGST/>}/>
      <Route path='/admin-master-uom-page' element={<MasterUOM/>}/>
      <Route path='/admin-master-business-type-page' element={<MasterBusinessType/>}/>
      <Route path='/admin-master-pincode-page' element={<MasterPincode/>}/>
      <Route path='/admin-master-brand-name-page' element={<MasterBrandname/>}/>
      <Route path='/admin-master-type-of-company-page' element={<MasterTypeOfCompany/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
