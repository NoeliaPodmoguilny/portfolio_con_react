import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  
  const [state, handleSubmit] = useForm("mnqyyqne");
    if (state.succeeded) {
        return <p className='container lightColor title d-flex flex-column align-items-center parrForm' >¡Gracias por tu mensaje!<span className='title'> Me pondré en contacto pronto</span></p>;
    }

  return (
    <div className="container">
      <div className="row marginForm">
        <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <input
                  id="email"
                  type="email" 
                  name="email"
                  className="form-control m-1 paddingForm"
                  placeholder="Email"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="form-control m-1 paddingForm"
                  rows={'5'}
                  placeholder="Message"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="form-control m-1 btnCV borderNone"
                >
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
