import React from 'react'

export default function MasterBrandname() {
  return (
    <>
     <main id="main" className="main poppins-font">

<section className="section dashboard ps-3 ">
  <div className="row">
    <div className="col-lg-10">
      <div className="row">
        <div className="col-xxl-4 col-md-12">
          <div className="pagetitle ps-1 ">
            <div className="pagetitle-head">
              <h1 className='pt-1 oswald-font  '>Brand Name</h1>
            </div>
          </div>
          <div className="card info-card sales-card">
            <div className="card-body col-md-12 col-sm-6">

              <table class="table mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

              <div className="row mt-3">
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-12">
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
