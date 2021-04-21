import React from 'react'

const ContactMsg = () => (

    
        <div className="card">
            <div className="card-body">
                <div className="form-header blue accent-1">
                    <h3><i className="fas fa-envelope"></i> Susisiekite su mumis:</h3>
                </div>
                
                <br />
                <div className="md-form">
                    <i className="fas fa-user prefix grey-text"></i>
                    <label htmlFor="form-name">Vardas</label>
                    <input type="text" id="form-name" className="form-control" />
                    
                </div>
                <div className="md-form">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <label htmlFor="form-email">El.paštas</label>
                    <input type="text" id="form-email" className="form-control" />
                    
                </div>
                {/* <div className="md-form">
                    <i className="fas fa-tag prefix grey-text"></i>
                    <input type="text" id="form-Subject" className="form-control" />
                    <label htmlFor="form-Subject">Subject</label>
                </div> */}
                <div className="md-form">
                    <i className="fas fa-pencil-alt prefix grey-text"></i>
                    <label htmlFor="form-text"> Tekstas</label>
                    <textarea id="form-text" className="form-control md-textarea" rows="3"></textarea>
                    
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-light-blue">Siųsti pranešimą</button>
                </div>
            </div>
        </div>
  

)

export default ContactMsg;