import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function ContactForm() {
  return (
    <div className='mt-5'>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div>
              <h1 style={{ color: '#D71D89', fontWeight: 'bold' }}>Limited seats</h1>
              <h1 className='font-monospace text-white'>Join Us now</h1>
              <p style={{maxWidth:"400px"}} className='text-white'> 
                We are headquartered in Nagpur, India, with presence in San Francisco, California. Reach out to us to dive into the realm of immortalization and shape the course of eternity.
              </p>
              <div className='mt-4'>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#d71d78", height: '20px' }} />
                <span className='text-white'> India || USA</span>
                <br />
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#d71d78", height: '20px' }} />
                <span className='text-white'> hello@immverse.ai</span>
              </div>
            </div>
          </div>
          <div className='col-md-6 p-5 contact'>
            <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name*</label>
                  <input type="text" className="form-control" placeholder='Enter your full name'/>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email*</label>
                  <input type="email" className="form-control" placeholder='Enter your email'/>
                </div>
                <div className="col-md-12">
                  <label className="form-label">Mobile No*</label>
                  <input type="number" className="form-control" placeholder='Enter your mobile no.'/>
                </div>
                <div className="col-12">
                <label className="form-label">Your Message*</label>
                  <input type="text" id='msg' className="form-control" placeholder='Enter your message'/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
          </div>
        </div>
      </div>
      <hr color="purple" style={{margin:"0px"}}/>
      <div className='d-flex flex-column align-items-center justify-content-center bg-black py-5'>
        <img className='rounded mx-auto d-block' style={{ marginTop: '10px' }} src={"/assets/logo.png"} width={250} height={75} alt="Logo" />
        <p className='text-center text-light' style={{ paddingTop: '0.2px' }}>Immortalizing Humans</p>
        <div className='d-flex'>
          <img className='rounded mx-auto mt-3 ms-2' src={"/assets/facebook.png"} style={{width:"30px", height:"30px"}} alt="Facebook" />
          <img className='rounded mx-auto mt-3 ms-2' src={"/assets/twitter.png"} style={{width:"30px", height:"30px"}} alt="Twitter" />
          <img className='rounded mx-auto mt-3 ms-2' src={"/assets/insta.png"} style={{width:"30px", height:"30px"}} alt="Instagram" />
          <img className='rounded mx-auto mt-3 ms-2' src={"/assets/linkdn.png"} style={{width:"30px", height:"30px"}} alt="LinkedIn" />
        </div>
        <h5 className='text-center text-bold text-grey mt-5'>Term of Service | Privacy Policy </h5>
        <hr style={{ color: 'white', width: '75%' }} />
        <h6 className='text-center text-white'>Disclaimer: Act of fiction, AI content is generated, exercise caution ImmverseAI owns no responsibility</h6>
        <p className='text-center text-grey'>Copyright 2023 ImmverseAI. All rights reserved</p>
      </div>
    </div>
  );
}

export default ContactForm;
