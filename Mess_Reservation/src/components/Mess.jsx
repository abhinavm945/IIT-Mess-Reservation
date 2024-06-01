import { Link } from "react-router-dom";

function Mess() {
  return (
    <>
      <div className="card">
        <img
          src="\public\food-2569257_640 (1).jpg"
          className="card-img-top"
          alt="\public\food-2569257_640 (1).jpg"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <Link to="/Checkout" className="btn btn-primary">
            BREAKFAST
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <Link to="/Checkout" className="btn btn-primary">
            LUNCH
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <Link to="Checkout" className="btn btn-primary">
            DINNER
          </Link>
        </div>
      </div>
    </>
  );
}

export default Mess;
