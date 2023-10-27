import React from 'react'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicInfo from './Component/BasicInfo'
import BillingDetails from './Component/BillingDetails'
import ContactDetails from './Component/ContactDetails'
import AdditionalDetails from './Component/AdditionalDetails'

import './assets/css/style1.css'
import Master from './Component/Master.jsx'

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


      <Route path='/admin-master-page' element={<Master/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
