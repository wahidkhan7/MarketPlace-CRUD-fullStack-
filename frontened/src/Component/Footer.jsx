 import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-auto w-100">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          {/* Branding */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-1">My App</h5>
            <p className="mb-0 small">© 2025 My App. All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-2">
                <a href="/" className="text-light text-decoration-none">Home</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="/about" className="text-light text-decoration-none">About</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="/contact" className="text-light text-decoration-none">Contact</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="/privacy" className="text-light text-decoration-none">Privacy</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="#" className="text-light fs-5 mx-2"><FaFacebookF /></a>
              <a href="#" className="text-light fs-5 mx-2"><FaTwitter /></a>
              <a href="#" className="text-light fs-5 mx-2"><FaInstagram /></a>
              <a href="#" className="text-light fs-5 mx-2"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

