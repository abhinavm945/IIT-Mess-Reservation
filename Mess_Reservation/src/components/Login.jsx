import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          height: "500px",
        }}
      >
        <div
          className="container-fluid"
          // style={{
          //   top: "100%",
          // }}
        >
          <Link className="navbar-brand" to="/">
            <img
              src="https://th.bing.com/th/id/OIP.hfwtErNXjdbIMUC8t5pxagHaHa?rs=1&pid=ImgDetMain"
              alt="Logo"
              width="30"
              height="30"
            />
            IIT MESS RESERVATION
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Login;
