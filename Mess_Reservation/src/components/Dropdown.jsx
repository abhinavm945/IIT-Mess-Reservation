import { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="profile-dropdown">
        <button className="profile-toggle" onClick={toggleDropdown}>
          <img
            src="https://www.signaturemontana.com/wp-content/uploads/blank-profile-picture-973460_1280-e1444240558836.png"
            alt="https://www.signaturemontana.com/wp-content/uploads/blank-profile-picture-973460_1280-e1444240558836.png"
            width="30"
            height="30"
            className="rounded-circle"
          />
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li>
              <Link href="#">Profile</Link>
            </li>
            <li>
              <Link href="#">Settings</Link>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <Link href="#">Logout</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Dropdown;
