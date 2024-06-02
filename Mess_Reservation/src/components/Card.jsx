import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <Link to="/Mess" className="card" style={{ display: "inline-block" }}>
        <img
          src="https://st3.depositphotos.com/5365540/16330/i/450/depositphotos_163303176-stock-photo-modern-interior-of-cafeteria-or.jpg"
          className="card-img-top"
          alt="https://st3.depositphotos.com/5365540/16330/i/450/depositphotos_163303176-stock-photo-modern-interior-of-cafeteria-or.jpg"
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
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhZmV8ZW58MHx8MHx8fDA%3D"
          className="card-img-top"
          alt="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhZmV8ZW58MHx8MHx8fDA%3D"
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
