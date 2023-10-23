import React from 'react'
import Navbar from './Navbar'

export default function ContactDetails() {
  return (
    <>
    <main id="main" class="main container-fluid">
        <Navbar/>

            <div class="pagetitle ps-3">
                <h1 className='pt-2'>Contact Details</h1>
                <nav>
                <ol class="breadcrumb pt-2">
                        <li class="breadcrumb-item"><a href="index.html">Supplier Management</a></li>
                        <li class="breadcrumb-item active">Contact Details</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- End Page Title --> */}

            <section class="section dashboard ps-3">
                <div class="row">

                    {/* <!-- Left side columns --> */}
                    <div class="col-lg-8">
                        <div class="row">

                            {/* <!-- Sales Card --> */}
                            <div class="col-xxl-4 col-md-12">
                                <div class="card info-card sales-card">

                                    <div class="card-body">
                                    <div className="row mt-3">
                                                
                                                <div class="row mt-3">
                                                    <div class="col-lg-6 col-md-6 col-12">
                                                        <label class="form-label">Name</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-12">
                                                        <label class="form-label">E-mail</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                </div>
                                                <div class="row mt-3">
                                                    <div class="col-lg-6 col-md-6 col-12">
                                                        <label class="form-label">Mobile</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-12">
                                                        <label class="form-label">Whatsapp</label>
                                                        <input type="text" className='form-control' />
                                                    </div>
                                                </div>
                                                <div class="row mt-3">
                                                    <div class="col-lg-6 col-md-6 col-12">
                                                        <label class="form-label">Designation</label>
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
