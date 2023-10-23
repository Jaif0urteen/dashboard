import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function BasicInfo() {
    return (
        <>
            <main id="main" class="main container-fluid">

                <Navbar />
                <div class="pagetitle ps-3 ">
                    <h1 className='pt-2'>Basic Info</h1>
                    <nav>
                        <ol class="breadcrumb pt-2">
                            <li class="breadcrumb-item"><Link to="">Supplier Management</Link></li>
                            <li class="breadcrumb-item active">Basic info</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section class="section dashboard ps-3 ">
                    <div class="row">

                        {/* <!-- Left side columns --> */}
                        <div class="col-lg-8">
                            <div class="row">

                                {/* <!-- Sales Card --> */}
                                <div class="col-xxl-4 col-md-12">
                                    <div class="card info-card sales-card">
                                        <div class="card-body col-md-12 col-sm-6">
                                            <label class="form-label mt-3">Company Name</label>
                                            <input type="text" class="form-control" />
                                            <label class="form-label mt-3">Business Type</label>
                                            <input type="text" class="form-control" />
                                            <label class="form-label mt-3">Location</label>
                                            <input class="form-control" style={{ height: "75px" }} />
                                            <div className="row mt-3">
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-6 col-12">
                                                        <label class="form-label">Pincode</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div class="col-lg-3 col-md-6 col-12">
                                                        <label class="form-label">City</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div class="col-lg-3 col-md-6 col-12">
                                                        <label class="form-label">State</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div class="col-lg-3 col-md-6 col-12">
                                                        <label class="form-label">Country</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
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
