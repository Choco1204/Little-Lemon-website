import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Logo and Description */}
//         <div className="footer-section">
//           <a href="/" className="footer-logo">
//             <img src="/Logo.png" alt="Little Lemon Logo" />
//           </a>
//           <p>
//             Little Lemon is a family-owned Mediterranean restaurant serving
//             traditional recipes with a modern twist.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="footer-section">
//           <h4>Links</h4>
//           <ul className="footer-links">
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Menu</a>
//             </li>
//             <li>
//               <a href="#">Reservations</a>
//             </li>
//             <li>
//               <a href="#">Order Online</a>
//             </li>
//             <li>
//               <a href="#">Login</a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Information */}
//         <div className="footer-section">
//           <h4>Contact Us</h4>
//           <p>123 Mediterranean Street, Chicago, IL</p>
//           <p>Phone: (123) 456-7890</p>
//           <p>Email: contact@littlelemon.com</p>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="footer-bottom">
//         <p>&copy; 2024 Little Lemon. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <section className="flex flex-col items-start">
          <a href="/" className="mb-3">
            <img src="/Logo.png" alt="Little Lemon Logo" className="w-28" />
          </a>
          <p className="text-sm leading-relaxed">
            Little Lemon is a family-owned Mediterranean restaurant serving
            traditional recipes with a modern twist.
          </p>
        </section>

        {/* Navigation Links */}
        <nav aria-label="Footer Navigation">
          <h4 className="text-lg font-semibold mb-3 text-yellow-400">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              "Home",
              "About",
              "Menu",
              "Reservations",
              "Order Online",
              "Login",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-yellow-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Information */}
        <address className="not-italic">
          <h4 className="text-lg font-semibold mb-3 text-yellow-400">
            Contact Us
          </h4>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> 123 Mediterranean St, Chicago, IL
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> (123) 456-7890
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> contact@littlelemon.com
          </p>
        </address>
      </div>

      {/* Social Media and Copyright */}
      <div className="border-t border-yellow-400 mt-8 pt-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
            <FaTwitter size={20} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
