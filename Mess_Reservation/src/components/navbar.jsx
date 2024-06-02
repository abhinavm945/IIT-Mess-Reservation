import { Link } from "react-router-dom";
import { useState } from "react";

function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          // style={{
          //   height: "500px",
          // }}
        >
          <div
            className="container-fluid"
            // style={{
            //   top: "100%",
            // }}
          >
            <Link className="navbar-brand" to="/">
              <img
                src="https://th.bing.com/th/id/OIP.hfwtErNXjdbIMUC8t5pxagHaHa?rs=1&pid=ImgDetMain"
                alt="Logo"
                width="30"
                height="30"
              />
              IIT MESS RESERVATION
            </Link>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="card" style={{ backgroundColor: "#2383f2" }}>
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="card" style={{ backgroundColor: "#2383f2" }}>
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="profile-dropdown">
            <button className="profile-toggle" onClick={toggleDropdown}>
              <img
                src="https://www.signaturemontana.com/wp-content/uploads/blank-profile-picture-973460_1280-e1444240558836.png"
                alt="Profile"
                width="30"
                height="30"
                className="rounded-circle"
              />
              <span className="profile-span">Arun</span>
            </button>
          </div>
          {isOpen ? (
            <select>
              <option>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </option>
              <option>
                <Link to="/settings">Settings</Link>
              </option>
              <option>
                <Link to="/logout">Logout</Link>
              </option>
            </select>
          ) : (
            <p></p>
          )}
        </nav>
      </div>
    </>
  );
}

export default navbar;
