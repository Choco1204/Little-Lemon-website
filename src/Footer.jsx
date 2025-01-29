import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <a href="/" className="footer-logo">
            <img src="/Logo.png" alt="Little Lemon Logo" />
          </a>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant serving
            traditional recipes with a modern twist.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Mediterranean Street, Chicago, IL</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@littlelemon.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
