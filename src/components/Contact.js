import React from 'react'
//ravi.pngimport Man from '../../public/man.png'
const Contact = () => {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div>
                <h2 className='text-center mb-5 shadow-sm m-2 p-3'>Contact Us:</h2>
            </div>
            <div className='row m-2'>
                <div className="col-md-7 shadow rounded  p-5">
                {/* <div className='container'> */}
                    <div className="row">
                        <div className="col-6 mb-5">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="col-6 mb-5">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                        <div className="col-6 mb-5">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="example@gmail.com"/>
                        </div>
                        <div className="col-6 mb-5">
                            <label className="form-label">Subject</label>
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="mb-5">
                            <label className="form-label">Message</label>
                            <textarea name="" className="form-control" placeholder="Write Your Message Here..."></textarea>

                        </div>

                        
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Submit
                        </button>

                        
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">CodeRavi</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Follow us
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>

                    </div>
                {/* </div> */}
                        <div className="col-md-5 bg-light">
                            <div className="ml-5">
                                <img src='ravi.png' alt="" className="img-fluid"/>
                            </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Contact