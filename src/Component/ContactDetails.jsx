import React from 'react'
import Navbar from './Navbar'
import {FcBusinessContact} from 'react-icons/fc'

export default function ContactDetails() {
  return (
    <>
    <main id="main" className="main ">
        <Navbar/>

            <div className="pagetitle ps-3">
                <div className="pagetitle-head">
                    <li className='list-unstyled'><FcBusinessContact /></li>
                <h1 className='pt-2 oswald-font'>Contact Details</h1>
                </div>
                <nav>
                <ol className="breadcrumb pt-2">
                        <li className="breadcrumb-item"><a href="index.html">Supplier Management</a></li>
                        <li className="breadcrumb-item active">Contact Details</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- End Page Title --> */}

            <section className="section dashboard ps-3">
                <div className="row">

                    {/* <!-- Left side columns --> */}
                    <div className="col-lg-12">
                        <div className="row">

                            {/* <!-- Sales Card --> */}
                            <div className="col-xxl-4 col-md-12">
                                <div className="card info-card sales-card">

                                    <div className="card-body">
                                    <div className="row mt-3">
                                                
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Name</label>
                                                        <input type="text" className='form-control' placeholder='Name'/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">E-mail</label>
                                                        <input type="text" className='form-control' placeholder='E-mail' />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Mobile</label>
                                                        <input type="text" className='form-control' placeholder='Mobile'/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Whatsapp</label>
                                                        <input type="text" className='form-control' placeholder='Whatsapp'/>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Designation</label>
                                                        <input type="text" className='form-control' placeholder='Designation'/>
                                                    </div>
                                                </div>
                                            </div>
                                    <button className="btn btn-col mt-3" type="button">Button</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}
