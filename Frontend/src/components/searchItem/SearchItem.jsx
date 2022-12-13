import "./searchItem.css";
import { Link } from "react-router-dom";
import b3 from "../../images/buildings/b3.jpeg"

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={b3}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Building {item.name}</h1>
        <span className="siTaxiOp">{item.description}</span>
        <span className="siSubtitle">
          Single, double, triple, and studios are provided
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          First come, first serve
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">50 rooms</span>
          <Link to={`/buildings/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
