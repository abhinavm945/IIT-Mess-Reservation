import React, { useEffect } from "react";
import "../../scrollbar.css";

function NewNotification({ type, message, alertMsg }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      alertMsg(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, [alertMsg]);

  return (
    <div>
      {type === "success" && (
        <div
          className="p-2 absolute bg-green-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          style={{ zIndex: "999999" }}
          role="alert"
        >
          <span className="flex rounded-full bg-green-700 uppercase px-2 py-1 text-xs font-bold mr-3">
            <img src="assets/img/login_red.svg" alt="success-icon" />
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            {message}
          </span>
        </div>
      )}
      {type === "error" && (
        <div
          className="p-2 absolute bg-red-800 items-center text-indigo-100 leading-none flex lg:inline-flex new_notification"
          style={{ zIndex: "999999", backgroundColor: "#D32F2F" }}
          role="alert"
        >
          <span>
            <img
              src="assets/img/outline-error_outline-24px.svg"
              alt="error-icon"
            />
          </span>
          <span style={{ marginLeft: 19, fontSize: 12 }}>{message}</span>
        </div>
      )}
      {type === "update" && (
        <div
          className="p-2 absolute bottom-0 bg-blue-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          style={{ zIndex: "999999" }}
          role="alert"
        >
          <span className="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            {message}
          </span>
        </div>
      )}
      {type === "delete" && (
        <div
          className="p-2 absolute bottom-0 bg-red-100 items-center text-red-700 leading-none lg:rounded-full flex lg:inline-flex"
          style={{ zIndex: "999999" }}
          role="alert"
        >
          <span className="flex rounded-full bg-red-100 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            {message}
          </span>
        </div>
      )}
      {type === "warning" && (
        <div
          className="p-2 absolute bg-yellow-800 items-center text-indigo-50 leading-none flex lg:inline-flex new_notification"
          style={{ zIndex: "999999", backgroundColor: "#FFA000" }}
          role="alert"
        >
          <span>
            <img src="assets/img/login_red.svg" alt="warning-icon" />
          </span>
          <span
            className="font-notification"
            style={{ marginLeft: 19, fontSize: 12 }}
          >
            {message}
          </span>
        </div>
      )}
    </div>
  );
}

export default NewNotification;
