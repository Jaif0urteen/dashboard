import React from 'react'


export default function Master() {
  return (
    <>
      <main id="main" className="main  ">
        <div className="pagetitle ps-3 ">
          <h1 className='pt-2 oswald-font'>Master Page</h1>
        </div>
        {/* <!-- End Page Title --> */}

        <section className="section dashboard ps-3 pt-3 ">
          <div className="row">

            {/* <!-- Left side columns --> */}
            <div className="col-lg-10">
              <div className="row">

                {/* <!-- Sales Card --> */}
                <div className="col-xxl-4 col-md-12">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <div className="row mt-3">

                        <div className="row mt-1">
                          <h5 className='poppins-font'>GST (%) </h5>
                          <div className="col-lg-6 col-md-6 col-12 ">
                            <label className="form-label poppins-font ">Name</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <h5 className='poppins-font'>UMO</h5>
                          <div className="col-lg-6 col-md-6 col-12 ">
                            <label className="form-label poppins-font">Name</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <h5 className='poppins-font'>Business Type</h5>
                          <div className="col-lg-6 col-md-6 col-12 ">
                            <label className="form-label poppins-font">Name</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <h5 className='poppins-font'>Pincode</h5>
                          <div className="col-lg-4 col-md-6 col-12 ">
                            <label className="form-label poppins-font">Pincode</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <label className="form-label poppins-font">City</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <label className="form-label poppins-font">State</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-4 col-md-6 col-12 mt-2">
                            <label className="form-label poppins-font">Country</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-4 col-md-6 col-12 mt-2">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <h5 className='poppins-font'>Brand Name</h5>
                          <div className="col-lg-6 col-md-6 col-12 ">
                            <label className="form-label poppins-font">Name</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <h5 className='poppins-font'>Type of Company</h5>
                          <div className="col-lg-6 col-md-6 col-12 ">
                            <label className="form-label poppins-font">Name</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
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
