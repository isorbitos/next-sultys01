import React from 'react'

import ContactMsg from './contactMsg'


const ContactUs = () => (
    <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Kontaktai</h2>
            </div>
            {/* <form id="contactForm" name="sentMessage" noValidate="novalidate"> */}
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-5">
                       <ContactMsg />
                    </div>
                    <div className="col-md-7">
                        {/* <ContactMap /> */}
                    </div>
                </div>

            {/* </form> */}
        </div>
    </section>
);

export default ContactUs;