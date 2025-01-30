import { Link } from "react-router-dom";
import logo from "/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Little Lemon" className="h-8 w-auto" />
      </Link>

      <ul className="flex space-x-6 mx-8">
        <li>
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="hover:text-yellow-500">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="hover:text-yellow-500">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" className="hover:text-yellow-500">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-500">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
