import React from 'react'
import { FiSave } from 'react-icons/fi'
import { BiSolidEdit } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

export default function MasterPincode() {
  return (
    <>
      <main id="main" className="main poppins-font">
        <section className="section dashboard ps-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xxl-4 col-md-12">
                  <div className="pagetitle ">
                    <div className="pagetitle-head d-flex justify-content-between">
                    <div className="head-with-breadcrumb d-flex ">
                        <h1 className='pt-1 oswald-font pt-2'>Pincode</h1>
                        
                      </div>
                      <button className="btn btn-col me-2 save-col" type="button"><FiSave size={18} /></button>
                    </div>
                  </div>
                  <div className="card info-card sales-card">
                    <div className="card-body col-md-12 col-sm-6">
                      <div className="row">
                        <div className="row mt-3 d-flex justify-content-between">
                          <div className="col-lg-2 col-md-6 col-12">
                            <label className="form-label poppins-font">Pincode</label>
                            <input type="text" className='form-control' placeholder='Pincode' />
                          </div>
                          <div className="col-lg-2 col-md-6 col-12">
                            <label className="form-label poppins-font">City</label>
                            <input type="text" className='form-control' placeholder='City' />
                          </div>
                          <div className="col-lg-2 col-md-6 col-12">
                            <label className="form-label poppins-font">State</label>
                            <input type="text" className='form-control' placeholder='State' />
                          </div>
                          <div className="col-lg-2 col-md-6 col-12">
                            <label className="form-label poppins-font">Country</label>
                            <input type="text" className='form-control' placeholder='Country' />
                          </div>
                          <div className="col-lg-2 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' placeholder='Status' />
                          </div>
                        </div>
                        {/* <div className="row mt-3">
                          <div className="col-lg-4 col-md-6 col-12">
                            <label className="form-label poppins-font">Country</label>
                            <input type="text" className='form-control' placeholder='Country' />
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' placeholder='Status' />
                          </div>
                          
                        </div> */}
                      </div>
                      <table className="table mt-4">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pincode</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Country</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Uttar Pradesh</td>
                            <td>Uttar Pradesh</td>
                            <td>Uttar Pradesh  </td>
                            <td>
                              <a className="edit edit-col rounded"  data-toggle="tooltip"><i ><BiSolidEdit   size={23} /></i></a>
                              <a className="delete delete-col rounded" data-toggle="tooltip"><i><MdDeleteOutline  size={23} /></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
