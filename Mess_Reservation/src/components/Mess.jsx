import { Link, useNavigate } from "react-router-dom";

function Mess() {
  const navigate = useNavigate();

  const handleBookYourMeal = () => {
    navigate("/checkout");
  };

  return (
    <div className="about-title">
      <Link
        to="/menu/BREAKFAST"
        className="card"
        style={{ display: "inline-block" }}
      >
        <img
          src="/public/food-2569257_640 (1).jpg"
          className="card-img-top"
          alt="BREAKFAST"
          height="323"
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
        to="/menu/LUNCH"
        className="card"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/08/d04f8cfa8c0e075c118370ee71c253b283b44ede.jpeg"
          className="card-img-top"
          alt="LUNCH"
          height="323"
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
        to="/menu/DINNER"
        className="card"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg"
          className="card-img-top"
          alt="DINNER"
          height="323"
        />
        <div className="card-info">
          <h5 className="card-title">DINNER</h5>
          <p className="card-description">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
        </div>
      </Link>
      <Link
        to="/menu/SNACKS"
        className="card"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://th.bing.com/th/id/OIP.e8aK-NaS4qyZ9px2A6kLfwHaE8?rs=1&pid=ImgDetMain"
          className="card-img-top"
          alt="DINNER"
          height="323"
        />
        <div className="card-info">
          <h5 className="card-title">SNACKS</h5>
          <p className="card-description">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
        </div>
      </Link>
      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg m-2" onClick={handleBookYourMeal}>
          BOOK YOUR MEAL
        </button>
      </div>
    </div>
  );
}

export default Mess;
