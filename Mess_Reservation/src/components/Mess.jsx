import { Link } from "react-router-dom";

function Mess() {
  return (
    <>
      <div className="about-title">
        <h1>MESS MENU</h1>
        <Link
          to="/Checkout"
          className="card"
          style={{ display: "inline-block" }}
        >
          <img
            src="\public\food-2569257_640 (1).jpg"
            className="card-img-top"
            alt="\public\food-2569257_640 (1).jpg"
          />
          <div className="card-info">
            <h5 className="card-title">BREAKFAST</h5>
            <p className="card-description">
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </p>
          </div>
        </Link>
        <Link
          to="/Checkout"
          className="card"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/08/d04f8cfa8c0e075c118370ee71c253b283b44ede.jpeg"
            className="card-img-top"
            alt="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/08/d04f8cfa8c0e075c118370ee71c253b283b44ede.jpeg"
          />
          <div className="card-info">
            <h5 className="card-title">LUNCH</h5>
            <p className="card-description">
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </p>
          </div>
        </Link>
        <Link
          to="/Checkout"
          className="card"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg"
            className="card-img-top"
            alt="https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg"
          />
          <div className="card-info">
            <h5 className="card-title">DINNER</h5>
            <p className="card-description">
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Mess;
