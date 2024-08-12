import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <button className="menuButton" onClick={toggleMenu}>
        &#9776;
      </button>
      <Link to="/" className="logo">
        <img
          src="https://th.bing.com/th/id/OIP.hfwtErNXjdbIMUC8t5pxagHaHa?rs=1&pid=ImgDetMain"
          alt="Logo"
          width="50"
          height="50"
          className="logoImage"
        />
        <span>IIT MESS RESERVATION</span>
      </Link>
      <div className="navLinks">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/order">ORDERS</Link>
      </div>
      <div className="profile">
        <Link to="/cart" className="shopping-logo">
          <img
            src="../../public/shopping_cart.png"
            alt="Logo"
            width="50"
            height="50"
            className="logoImage"
          />
        </Link>
        <Link to="/profile" className="profileButton">
          <img
            src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?rs=1&pid=ImgDetMain"
            alt="Profile"
            className="profilePic1"
          />
        </Link>
      </div>
      <div className={`menuLinks ${menuOpen ? "visible" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/order" onClick={toggleMenu}>
          ORDERS
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/logout" onClick={toggleMenu}>
          LOGOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
