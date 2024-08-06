/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [contact, setcontact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/logincontact",
        { contact, password }
      );
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      setError("Invalid contact or password");
    }
  };

  return (
    <>
      <img
        src="https://th.bing.com/th/id/OIP.hfwtErNXjdbIMUC8t5pxagHaHa?rs=1&pid=ImgDetMain"
        alt="Logo"
        width="43%"
        height="20%"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          marginLeft: "70px",
        }}
      />
      <div className="login-container">
        <div className="login-card">
          <h2>Login with contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="contact"
                placeholder="Contact number"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
              />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fas fa-lock"></i>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
          <div className="alternative-login">
            <Link to="/Login">
              <button type="submit">Login with Email</button>
            </Link>
          </div>
          <p>If you do not Have an Account</p>
          <Link to="/Register">
            <button type="submit">Signup</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
