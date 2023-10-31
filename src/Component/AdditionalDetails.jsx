import React from 'react'
import Navbar from './Navbar'
import {FcPlus} from 'react-icons/fc'

export default function AdditionalDetails() {
    return (
        <>
            <main id="main" className="main">
                <Navbar />

                <div className="pagetitle ps-3">
                    <div className="pagetitle-head">
                        <li className='list-unstyled'><FcPlus/></li>
                    <h1 className='pt-2 oswald-font'>Additional Details</h1>
                    </div>
                    <nav>
                        <ol className="breadcrumb pt-2">
                            <li className="breadcrumb-item"><a href="index.html">Supplier Management</a></li>
                            <li className="breadcrumb-item active">Additional Details</li>
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
                                                        <label className="form-label poppins-font">Brand Name</label>
                                                        <input type="text" className='form-control' placeholder='Brand Name'/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Incorporation Date</label>
                                                        <input type="date" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Type of Company</label>
                                                        <input type="text" className='form-control' placeholder='Type of Company'/>
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
            </main >
        </>
    )
}
