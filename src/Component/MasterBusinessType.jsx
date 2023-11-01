import React from 'react'
import { FiSave } from 'react-icons/fi'
import { BiSolidEdit } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

export default function MasterBusinessType() {
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
                        <h1 className='pt-1 oswald-font pt-2'>Business Type</h1>
                      </div>
                      <button className="btn btn-col me-2 save-col" type="button"><FiSave size={18} /></button>
                    </div>
                  </div>
                  <div className="card info-card sales-card">
                    <div className="card-body col-md-12 col-sm-6">
                      <div className="row">
                        <div className="row mt-3">
                          <div className="col-lg-6 col-md-6 col-12">
                            <label className="form-label poppins-font">Name</label>
                            <input type="text" className='form-control' placeholder='Name' />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <label className="form-label poppins-font">Status</label>
                            <input type="text" className='form-control' placeholder='Status' />
                          </div>
                        </div>
                      </div>
                      <table className="table mt-4">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                              <a className="edit edit-col rounded" data-toggle="tooltip"><i ><BiSolidEdit  size={23} /></i></a>
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
