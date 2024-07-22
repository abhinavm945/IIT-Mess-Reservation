/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from "../context/cardcontext";
import axios from "axios";

const Checkout = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [persons, setPersons] = useState("1");
  const [mealTypes, setMealTypes] = useState([]);
  const { cartData, setCartData } = useContext(CartContext);
  const navigate = useNavigate();

  const mealPrices = {
    BREAKFAST: 45,
    LUNCH: 60,
    DINNER: 60,
    SNACKS: 20,
  };

  const calculateTotalPrice = () => {
    const itemPrice = mealTypes.reduce(
      (sum, type) => sum + (mealPrices[type] || 0),
      0
    );
    return persons * selectedDates.length * itemPrice;
  };

  const toggleDate = (date) => {
    const dateString = date.toDateString();
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.includes(dateString)
        ? prevSelectedDates.filter((d) => d !== dateString)
        : [...prevSelectedDates, dateString]
    );
  };

  const toggleMealType = (type) => {
    setMealTypes((prevMealTypes) =>
      prevMealTypes.includes(type)
        ? prevMealTypes.filter((t) => t !== type)
        : [...prevMealTypes, type]
    );
  };

  const handleCheckout = async (event) => {
    event.preventDefault();
    if (selectedDates.length > 0 && mealTypes.length > 0) {
      const token = localStorage.getItem("token");
      const totalPrice = calculateTotalPrice();
      const newItem = {
        persons,
        dates: selectedDates,
        mealTypes,
        totalPrice,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/api/saveOrder/save",
          {
            cartData: newItem,
            token,
          }
        );

        setCartData([...cartData, newItem]);
        navigate("/cart");
      } catch (error) {
        console.error("Error saving order: ", error);
      }

      try {
        const response = await axios.post(
          "http://localhost:3000/api/saveCart/save",
          {
            cartData: newItem,
            token,
          }
        );

        setCartData([...cartData, newItem]);
        navigate("/cart");
      } catch (error) {
        console.error("Error saving order: ", error);
      }
    }
  };

  useEffect(() => {
    if (!persons) {
      setPersons("1");
    }
  }, [persons]);

  return (
    <div>
      <form className="card-checkout" onSubmit={handleCheckout}>
        <fieldset>
          <legend className="bold">CHECKOUT PAGE</legend>
          <div className="m-2">
            <label className="form-label">Select Meal Type</label>
            <div>
              {["BREAKFAST", "LUNCH", "SNACKS", "DINNER"].map((type) => (
                <button
                  type="button"
                  required
                  className={`btn m-1 ${
                    mealTypes.includes(type)
                      ? "btn-primary m-1"
                      : "btn-outline-primary m-1"
                  }`}
                  key={type}
                  onClick={() => toggleMealType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="personsSelect" className="form-label">
              HOW MANY PEOPLE WANT TO EAT?
            </label>
            <select
              id="personsSelect"
              className="form-select"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              required
            >
              {[...Array(9).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>Select Dates</h2>
            <DatePicker
              selected={null}
              onChange={toggleDate}
              minDate={new Date()}
              inline
              highlightDates={selectedDates.map((date) => new Date(date))}
              dayClassName={(date) =>
                selectedDates.includes(date.toDateString()) ? "selected" : ""
              }
            />
            <p>Selected dates: {selectedDates.join(", ")}</p>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="confirmationCheck"
                required
              />
              <label className="form-check-label" htmlFor="confirmationCheck">
                Are you sure??
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={selectedDates.length === 0 || mealTypes.length === 0}
          >
            CHECKOUT
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Checkout;
