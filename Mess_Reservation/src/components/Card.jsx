import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <Link to="/Mess" className="card" style={{ display: "inline-block" }}>
        <img
          src="https://st3.depositphotos.com/5365540/16330/i/450/depositphotos_163303176-stock-photo-modern-interior-of-cafeteria-or.jpg"
          className="card-img-top"
          alt="https://st3.depositphotos.com/5365540/16330/i/450/depositphotos_163303176-stock-photo-modern-interior-of-cafeteria-or.jpg"
          height="323"
        />
        <div className="card-info">
          <h5 className="card-title">MESS MENU</h5>
          <p className="card-description">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
        </div>
      </Link>
      <Link to="/Cafe" className="card" style={{ display: "inline-block" }}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7b282758503959.59ff2db6492f6.jpg"
          className="card-img-top"
          alt="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7b282758503959.59ff2db6492f6.jpg"
          height="323"
        />
        <div className="card-info">
          <h5 className="card-title">CAFE MENU</h5>
          <p className="card-description">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
        </div>
      </Link>
      <Link to="/Canteen" className="card" style={{ display: "inline-block" }}>
        <img
          src="https://www.shutterstock.com/image-photo/chef-standing-behind-full-lunch-600nw-1090719347.jpg"
          className="card-img-top"
          alt="https://www.shutterstock.com/image-photo/chef-standing-behind-full-lunch-600nw-1090719347.jpg"
          height="323"
        />
        <div className="card-info">
          <h5 className="card-title">CANTEEN MENU</h5>
          <p className="card-description">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
        </div>
      </Link>
    </>
  );
}

export default Card;
