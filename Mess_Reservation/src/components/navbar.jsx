import { Link } from "react-router-dom";
import { useState } from "react";
// import { SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img
          src="https://th.bing.com/th/id/OIP.hfwtErNXjdbIMUC8t5pxagHaHa?rs=1&pid=ImgDetMain"
          alt="Logo"
          width="50"
          height="50"
          style={{
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        />
        <Link to="/" className="logo">
          IIT MESS RESERVATION
        </Link>
      </Link>
      <div className="navLinks">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/order">MY ORDERS</Link>
        <Link to="/logout">LOGOUT</Link>
        <Link to="/cart">CART</Link>
      </div>
      <div className="profile">
        <Link to="/profile" className="profileButton">
          <img
            src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?rs=1&pid=ImgDetMain"
            alt="Profile"
            className="profilePic1"
          />
        </Link>
      </div>
      <button className="menuButton" onClick={toggleMenu}>
        &#9776;
      </button>
      {menuOpen && (
        <div className="menuLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/order">MY ORDERS</Link>
          <Link to="/logout">LOGOUT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
