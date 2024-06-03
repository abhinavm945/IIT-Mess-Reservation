import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://th.bing.com/th/id/OIP.hfwtErNXjdbIMUC8t5pxagHaHa?rs=1&pid=ImgDetMain"
          alt="Logo"
          width="30"
          height="30"
        />
        <Link to="/">IIT MESS RESERVATION</Link>
      </div>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="profile">
        <button onClick={toggleDropdown} className="profileButton">
          <img
            src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?rs=1&pid=ImgDetMain"
            alt="Profile"
            className="profilePic"
          />
        </button>
        {dropdownOpen && (
          <div className="dropdownMenu">
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/logout">Logout</Link>
          </div>
        )}
      </div>
      <button className="menuButton" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
