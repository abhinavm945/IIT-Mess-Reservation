import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cafe = () => {
  const [cafeData, setCafeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cafeHandler = async () => {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCafeData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    cafeHandler();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <>
      <div className="cafeItems">
        {cafeData?.categories.map((item, index) => (
          <div className="cafeitems" key={index}>
            <div className="card" style={{ display: "inline-block" }}>
              <img
                src={item.strCategoryThumb}
                className="card-img-top"
                alt={item.strCategory}
                height="323"
              />
              <div className="card-info">
                <h5 className="card-title">{item.strCategory}</h5>
                <p className="card-description">
                  {item.strCategoryDescription}
                </p>
                <Link>
                  <button>GO TO THE {item.strCategory} Categories </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cafe;
