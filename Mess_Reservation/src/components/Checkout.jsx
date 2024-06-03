/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Checkout = () => {
  // Get today's date
  const today = new Date();

  // Array of weekday names
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Calculate the index of today's weekday (0 for Sunday, 1 for Monday, etc.)
  const todayIndex = today.getDay();

  // Filter the weekdays starting from today's index
  const remainingWeekdays = weekdays.slice(todayIndex);

  // State to store selected weekdays
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);

  // Function to handle weekday selection
  const toggleWeekday = (weekday) => {
    const isSelected = selectedWeekdays.includes(weekday);
    if (isSelected) {
      setSelectedWeekdays(selectedWeekdays.filter((day) => day !== weekday));
    } else {
      setSelectedWeekdays([...selectedWeekdays, weekday]);
    }
  };

  return (
    <>
      <div>
        <form className="card-checkout">
          <fieldset>
            <legend>CHECKOUT PAGE</legend>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                HOW MANY PERSON's WHO WANT TO EAT?
              </label>
              <select id="disabledSelect" className="form-select">
                <option disabled>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
            </div>
            <div>
              <h2>Select Weekdays</h2>
              <p>Click on the weekdays to select them:</p>
              <div>
                {remainingWeekdays.map((weekday, index) => (
                  <button
                    type="button"
                    className="btn btn-primary"
                    key={index}
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                    onClick={() => toggleWeekday(weekday)}
                  >
                    {weekday}
                  </button>
                ))}
              </div>
              <p>Selected weekdays: {selectedWeekdays.join(", ")}</p>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="disabledFieldsetCheck"
                >
                  Are you sure??
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              CHECKOUT
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Checkout;
