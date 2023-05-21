import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario de contacto
    // Utiliza los valores de name, email y message
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control m-1"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control m-1"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control m-1"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btnCV m-1">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
