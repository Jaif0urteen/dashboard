import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { FcOrganization } from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BasicInfo() {
    const [details, setDetails] = useState(
        {
            companyname : " ",
            businesstype : " ",
            address : " ",
            city : " ",
            state : " ", 
            country : " ",
            pincode : " "
        }
    )

function getData (e) {
// console.log(e.target.value);
// console.log(e.target.name);
const {name , value} = e.target
setDetails((prev) => {
    return{
        ...prev ,
        [name] : value
    }
})
}

function postData(e){
    e.preventDefault()
    toast.success('Your Form is Submit', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

    return (
        <>
            <main id="main" className="main  ">
                <Navbar />
                <div className="pagetitle ps-3 ">
                    <div className="pagetitle-head">
                        <li className='list-unstyled'><FcOrganization /></li>
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
                <section className="section dashboard ps-3">
                    <div className="row">
                        {/* <!-- Left side columns --> */}
                        <div className="col-lg-12">
                            <div className="row">
                                {/* <!-- Sales Card --> */}
                                <div className="col-xxl-4 col-md-12">
                                    <div className="card info-card sales-card">
                                        <div className="card-body poppins-font">
                                            <form onSubmit={postData}>
                                                <div className="row mt-3">
                                                    <div className="row mt-3">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <label className="form-label ">Company Name</label>
                                                            <input type="text" className='form-control' name='companyname'  onChange={getData} placeholder='Company name' />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <label className="form-label ">Business Type</label>
                                                            <input type="text" className='form-control' name='businesstype'  onChange={getData} placeholder='Business type' />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-lg-12 col-md-6 col-12">
                                                            <label className="form-label ">Address</label>
                                                            <input type="text" className='form-control' name='address'  onChange={getData} placeholder='Address' style={{ height: "75px" }} />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <label className="form-label ">City</label>
                                                            <input type="text" className='form-control' name='city'  onChange={getData} placeholder='City' />
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <label className="form-label ">State</label>
                                                            <input type="text" className='form-control' name='state'  onChange={getData} placeholder='State' />
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <label className="form-label ">Country</label>
                                                            <input type="text" className='form-control' name='country'  onChange={getData} placeholder='Country' />
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <label className="form-label ">Pincode</label>
                                                            <input type="text" className='form-control' name='pincode'  onChange={getData} placeholder='Pincode' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-col mt-3" type="submit">Submit</button>
                                                <ToastContainer />
                                            </form>

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
