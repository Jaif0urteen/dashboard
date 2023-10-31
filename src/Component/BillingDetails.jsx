import React from 'react'
import Navbar from './Navbar'
import { FcCurrencyExchange } from 'react-icons/fc'

export default function BillingDetails() {
    return (
        <>


            <main id="main" className="main ">
                <Navbar />

                <div className="pagetitle ps-3 ">
                    <div className="pagetitle-head">
                        <li className='list-unstyled'><FcCurrencyExchange /></li>
                        <h1 className='pt-2 oswald-font' >Billing Details</h1>
                    </div>
                    <nav>
                        <ol className="breadcrumb pt-2">
                            <li className="breadcrumb-item"><a href="index.html">Supplier Management</a></li>
                            <li className="breadcrumb-item active">Billing Details</li>
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
                                        <div className="card-body ">
                                            <div className="row mt-3">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Pincode</label>
                                                        <input type="text" className='form-control' placeholder='Pincode'/>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">City</label>
                                                        <input type="text" className='form-control' placeholder='City'/>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">State</label>
                                                        <input type="text" className='form-control' placeholder='State'/>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <label className="form-label poppins-font">Country</label>
                                                        <input type="text" className='form-control' placeholder='Country'/>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">GST IN Number</label>
                                                        <input type="text" className='form-control' placeholder='GST IN Number'/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">GST IN Document</label>
                                                        <input type="text" className='form-control' placeholder='GST IN Document'/>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">PAN</label>
                                                        <input type="text" className='form-control' placeholder='PAN'/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">PAN Document</label>
                                                        <input type="text" className='form-control' placeholder='PAN Document'/>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">CIN</label>
                                                        <input type="text" className='form-control' placeholder='CIN'/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <label className="form-label poppins-font">CIN Number</label>
                                                        <input type="text" className='form-control' placeholder='CIN Number'/>
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
