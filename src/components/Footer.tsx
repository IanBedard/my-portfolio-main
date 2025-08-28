import React from 'react';


export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="container mx-auto">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Divi Website Design</a>
          <a className="link link-hover">WordPress Development</a>
          <a className="link link-hover">Website Maintenance</a>
          <a className="link link-hover">SEO Optimization</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Portfolio</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="border-t border-base-300 pt-8 text-center">
          <p>© 2025 Divi Expert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};