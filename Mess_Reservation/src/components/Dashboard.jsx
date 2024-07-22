import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="profile-d">
          <img
            src="/path/to/profile-pic.jpg"
            alt="Profile"
            className="profilePic"
          />
          <h2>John Doe</h2>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="overview">Overview</Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
