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
      const response = await axios.post("http://localhost:3000/api/users/logincontact", { contact, password });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login with Contact number</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="contact"
          placeholder="Enter your contact number"
          value={contact}
          onChange={(e) => setcontact(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="p-2">
        <Link to="/Login">
          <button type="submit">Login with Email</button>
        </Link>
      </div>
      <p>If you do not Have an Account</p>
      <Link to="/Register">
        <button type="submit">Signup</button>
      </Link>
    </div>
  );
}

export default Login;
