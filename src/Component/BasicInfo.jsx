import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import {FcOrganization} from 'react-icons/fc'


export default function BasicInfo() {
    return (
        <>
            <main id="main" className="main  ">

                <Navbar />
                <div className="pagetitle ps-3 ">
                    <div className="pagetitle-head">
                        <li className='list-unstyled'><FcOrganization/></li>
                    <h1 className='pt-2 oswald-font ms-1 '>Basic Info</h1>
                    </div>
                    <nav>
                        <ol className="breadcrumb pt-2">
                           
                            <li className="breadcrumb-item"><Link to="">Supplier Management</Link></li>
                            <li className="breadcrumb-item active ">Basic info</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section dashboard ps-3 ">
                    <div className="row">

                        {/* <!-- Left side columns --> */}
                        <div className="col-lg-10">
                            <div className="row">

                                {/* <!-- Sales Card --> */}
                                <div className="col-xxl-4 col-md-12">
                                    <div className="card info-card sales-card">
                                        <div className="card-body col-md-12 col-sm-6">
                                            <label className="form-label mt-3 poppins-font">Company Name</label>
                                            <input type="text" className="form-control  " />
                                            <label className="form-label mt-3 poppins-font">Business Type</label>
                                            <input type="text" className="form-control" />
                                            <label className="form-label mt-3 poppins-font">Location</label>
                                            <input className="form-control" style={{ height: "75px" }} />
                                            <div className="row mt-3">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Pincode</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">City</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">State</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Country</label>
                                                        <input type="text" className='form-control' />
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
