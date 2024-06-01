import Navbar from "./components/navbar";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Mess from "./components/Mess";
import Checkout from "./components/Checkout";
import Cafe from "./components/Cafe";
import Canteen from "./components/Canteen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/mess" element={<Mess />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Cafe" element={<Cafe />} />
          <Route path="/Canteen" element={<Canteen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
