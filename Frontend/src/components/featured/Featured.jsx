import "./featured.css";
import campus from "../../images/campus.jpg"
import farahinn from "../../images/Farahinn.jpg"
import downtonwd from "../../images/downtonwd.jpg"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={campus}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Campus</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={farahinn}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Farah Inn</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
        src={downtonwd}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Down town</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
