
import React from 'react'
import "./Footer.css"
import { FaPhoneAlt } from "react-icons/fa";
const footer = () => {
  return (
    <div>
      <div className="container-fluid footer text-white mb-4 pb-4" style={{}}>
        <div className="row pt-4">
            <div className="col-md-12">
              <div className="row">
                  <div className="col-md-3"></div>
                {/* <div className="col-md-2 mt-3">
                    <h4> <span className=''><MdElectricBolt className='text-warning fs-2' /></span>BrightVolt Solutions</h4>
                    <p className='text-center'>Your trusted electrical sloution provider, <br />powering homes business safely</p>
                </div> */}
                <div className="col-md-2 pt-3 text-center">
                    <p className='m-0 p-0'><strong>Quick Links</strong></p>
                    <p className='m-0 p-0'>Home</p>
                    <p className='m-0 p-0'>About Us</p>
                    <p className='m-0 p-0'>services</p>
                    <p className='m-0 p-0'>Contact</p>
                </div>
                <div className="col-md-2">
                    <h4>Our Services</h4>
                    <p className='m-0 p-0'>Residential Wiring</p>
                    <p className='m-0 p-0'>commercial Electric </p>
                    <p className='m-0 p-0'>Lighting Slotuiion</p>
                    <p className='m-0 p-0'>Saftey inspections</p>
                    <p  className='m-0 p-0'>24/7 Emergency Service</p>
                  
                </div>
                <div className="col-md-2">
                    <h4>Contact Us</h4>
                    <p><span>
                        </span>99999xxxxx</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
