/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cardcontext";
import axios from "axios";
import moment from "moment";

const Order = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const [orderData, setOrderData] = useState([]);

  const mealPrices = {
    BREAKFAST: 45,
    LUNCH: 60,
    DINNER: 60,
    SNACKS: 20,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:3000/api/saveOrder/orders",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrderData(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchOrders();
  }, []);

  const calculateItemPrice = (cartItem) => {
    const mealTypePrice = (cartItem.mealTypes || [])
      .map((type) => mealPrices[type] || 0)
      .reduce((a, b) => a + b, 0);
    return mealTypePrice * cartItem.persons * (cartItem.dates || []).length;
  };

  const groupOrdersByDateTime = (orders) => {
    const groupedOrders = {};

    orders.forEach((order) => {
      const date = moment(order.createdAt).format("YYYY-MM-DD");
      const time = moment(order.createdAt).format("HH:mm:ss");

      if (!groupedOrders[date]) {
        groupedOrders[date] = {};
      }

      if (!groupedOrders[date][time]) {
        groupedOrders[date][time] = {
          orders: [],
          mealTimes: [],
          persons: [],
          selectedDates: [],
          pricePerPerson: 0,
          totalPrice: 0,
        };
      }

      order.cartData.forEach((cartItem) => {
        cartItem.cartData.forEach((values) => {
          groupedOrders[date][time].orders.push(order);
          groupedOrders[date][time].mealTimes.push(...values.mealTypes);
          groupedOrders[date][time].persons.push(...values.persons);
          groupedOrders[date][time].selectedDates.push(...values.dates);
          groupedOrders[date][time].pricePerPerson += (values.mealTypes || [])
            .map((type) => mealPrices[type] || 0)
            .reduce((a, b) => a + b, 0);
          groupedOrders[date][time].totalPrice += calculateItemPrice(values);
        });
      });
    });

    return groupedOrders;
  };

  const groupedOrders = groupOrdersByDateTime(orderData);

  // Sort grouped orders by date, with today's date first
  const sortedDates = Object.keys(groupedOrders).sort((a, b) => {
    return moment(b).diff(moment(a));
  });

  return (
    <div className="">
    <div className="container my-5">
      <h1 className="text-center mb-4">Order Details</h1>
      <div className="order-container shadow p-4 rounded">
        {sortedDates.length > 0 ? (
          <>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Meal Time</th>
                    <th scope="col">No. of Persons</th>
                    <th scope="col">Selected Dates</th>
                    <th scope="col">Price per Person</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedDates.map((date) =>
                    Object.keys(groupedOrders[date]).map((time) => (
                      <tr key={`${date}-${time}`}>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{groupedOrders[date][time].mealTimes.join(", ")}</td>
                        <td>{groupedOrders[date][time].persons.join(",")}</td>
                        <td>{groupedOrders[date][time].selectedDates.join(", ")}</td>
                        <td>₹{groupedOrders[date][time].pricePerPerson}</td>
                        <td>₹{groupedOrders[date][time].totalPrice}</td>
                        <td className={`status-${groupedOrders[date][time].orders[0]?.status.toLowerCase()}`}>
                          {groupedOrders[date][time].orders[0]?.status}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {sortedDates.map((date) =>
              Object.keys(groupedOrders[date]).map((time) => {
                const orderStatus = groupedOrders[date][time].orders[0]?.status;
                return (
                  orderStatus === "Pending" && (
                    <div key={`${date}-${time}`} className="alert alert-warning mt-4" role="alert">
                      Your payment is being processed. Please wait...
                    </div>
                  )
                );
              })
            )}
            {sortedDates.map((date) =>
              Object.keys(groupedOrders[date]).map((time) => {
                const orderStatus = groupedOrders[date][time].orders[0]?.status;
                return (
                  orderStatus === "Completed" && (
                    <div key={`${date}-${time}`} className="alert alert-success mt-4" role="alert">
                      Your payment was successful! Thank you for your order.
                    </div>
                  )
                );
              })
            )}
            {sortedDates.map((date) =>
              Object.keys(groupedOrders[date]).map((time) => {
                const orderStatus = groupedOrders[date][time].orders[0]?.status;
                return (
                  orderStatus === "Failed" && (
                    <div key={`${date}-${time}`} className="alert alert-danger mt-4" role="alert">
                      There was an issue with your payment. Please try again.
                    </div>
                  )
                );
              })
            )}
          </>
        ) : (
          <div className="text-center">
            <h4>No orders found.</h4>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Order;
