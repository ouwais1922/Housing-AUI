import "./featuredProperties.css";
import Ra_1 from "../../Ra Images/282573183_1448410478947047_5918019139437515482_n.jpg"
import Ra_2 from "../../Ra Images/276220823_4885430671552464_4338294145903081726_n.jpg"
import Ra_3 from "../../Ra Images/318111492_3022825464676656_349394368157766881_n.jpg"
import Ra_4 from "../../Ra Images/312093583_1989694124563014_5921161818930669127_n.jpg"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={Ra_1}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nour Maski</span>
        <span className="fpCity">SSE student</span>
        <span className="fpPrice">Building 36</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={Ra_2}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Younes Boubbou</span>
        <span className="fpCity">SSE student</span>
        <span className="fpPrice">Building 18</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={Ra_3}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Ayoub Mabkhout</span>
        <span className="fpCity">SSE student</span>
        <span className="fpPrice">Building 21</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={Ra_4}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Amine Ahenjir</span>
        <span className="fpCity">SHSS student</span>
        <span className="fpPrice">Farah Inn</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
