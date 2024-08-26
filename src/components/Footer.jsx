// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png'
import twiter from '../assets/twiter.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className=" text-white py-4 mt-5 " style={{backgroundColor: 'rgba(92, 34, 98, 0.37)'}}>
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <div>
        <a  href="#"  style={{color:'#913880' , fontSize:'22px'}}>
          <img  src={logo} alt="logo" width="60" height="40" />
          logo
        </a>
        </div>
        <p style={{color:'#913880' , fontSize:'22px'}}>Stay in touch with us</p>
        <div>
            <a href="" className='mx-3'><img src={facebook} alt="" /></a>
            <a href="" className='mx-3'><img src={twiter} alt="" /></a>
            <a href="" className='mx-3'><img src={linkedin} alt="" /></a>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
