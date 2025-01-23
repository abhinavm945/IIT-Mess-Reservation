import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Mess from "./components/Mess";
import Checkout from "./components/Checkout";
import Cafe from "./components/Cafe";
import Canteen from "./components/Canteen";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import LoginContact from "./components/Logincontact";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import Order from "./components/Order";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:3000/api/users/profile",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setIsLoggedIn(!!response.data);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while checking the login status
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/logincontact"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <LoginContact setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/profile" /> : <Register />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/mess"
          element={isLoggedIn ? <Mess /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />}
        />
        <Route
          path="/cafe"
          element={isLoggedIn ? <Cafe /> : <Navigate to="/login" />}
        />
        <Route
          path="/canteen"
          element={isLoggedIn ? <Canteen /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/logout"
          element={<Logout setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/logincontact"
          element={isLoggedIn ? <Navigate to="/profile" /> : <LoginContact />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/order"
          element={isLoggedIn ? <Order /> : <Navigate to="/login" />}
        />
        <Route
          path="/payment"
          element={isLoggedIn ? <Payment /> : <Navigate to="/login" />}
        />
        <Route path="/menu/:mealType" element={<Menu />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
