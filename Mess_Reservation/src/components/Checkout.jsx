/* eslint-disable react/no-unescaped-entities */
function Checkout() {
  return (
    <>
      <form>
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
            {/* <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Disabled input"
            /> */}
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              FOR HOW MANY DAYS YOU WANT TO EAT?
            </label>
            <select id="disabledSelect" className="form-select">
              <option>Mon</option>
              <option>Tue</option>
              <option>Wed</option>
              <option>Thr</option>
              <option>Fri</option>
              <option>Sat</option>
              <option>Sun</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="disabledFieldsetCheck"
              />
              <label
                className="form-check-label"
                htmlFor="disabledFieldsetCheck"
              >
                Are you sure??
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            CHECKOUT
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default Checkout;
