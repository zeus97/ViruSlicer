import '../styles/ContactForm.scss'

function ContactForm() {


  return (
    <form className='contact-form'
    onSubmit={(e)=>{e.preventDefault();}}>
        <div className="row">
            <div className="col">
                <div className="mb-3">
                    <label 
                    htmlFor="InputName" 
                    className="form-label">
                        First Name
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="InputName"
                    placeholder='Your first name...'/>
                </div>
                <div className="mb-3">
                    <label 
                    htmlFor="InputEmail" 
                    className="form-label">
                        Email
                    </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="InputEmail"
                    placeholder='Your email...'/>
                </div>
            </div>
            <div className="col">
                <div className="mb-3">
                    <label 
                    htmlFor="InputLastName" 
                    className="form-label">
                        Last Name
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="InputLastName"
                    placeholder='Last name...'/>
                </div>
                <div className="mb-3">
                    <label 
                    htmlFor="InputPhone" 
                    className="form-label">
                        Phone Number
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="InputPhone"
                    placeholder='Type phone number...'/>
                </div>

            </div>
        </div>
        <div className="row">
            <div className="mb-3">
                <label 
                htmlFor="InputSubject" 
                className="form-label">
                    Subject
                </label>
                <input 
                type="text" 
                className="form-control" 
                id="InputSubject"
                placeholder='Type subject...'/>
            </div>
            <div className="mb-3">
                <label 
                htmlFor="InputMessage" 
                className="form-label">
                    Message
                </label>
                <textarea 
                className="form-control" 
                id="InputMessage"
                placeholder='Type Message...' 
                ></textarea>
            </div>
        </div>
        <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  )
}

export default ContactForm