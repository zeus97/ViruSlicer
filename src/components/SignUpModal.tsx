import React from 'react'

function SignUpModal() {
  return (
    <div className="modal fade" id="signupModal" tabIndex={-1} aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="signupModalLabel">
                        Sign Up
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={(e)=> e.preventDefault()}>
                        <div className="mb-3">
                            <label htmlFor="signupInputName" className="form-label">
                                First Name
                            </label>
                            <input type="text" className="form-control" id="signupInputName" placeholder='Your first name...' />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupInputLastName" className="form-label">
                                Last name
                            </label>
                            <input type="text" className="form-control" id="signupInputLastName" placeholder='Your last name...' />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupInputEmail" className="form-label">
                                Email address
                            </label>
                            <input type="email" className="form-control" id="signupInputEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signupInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="signupCheck" />
                            <label className="form-check-label" htmlFor="signupCheck">
                                I agree to the <span className='text-primary'>Terms of Service</span> and <span className='text-primary'>Privacy Policy</span>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Create account</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SignUpModal