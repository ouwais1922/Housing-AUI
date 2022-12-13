import "./featuredProperties.css";
import r1 from "../../images/Ra Images/r1.png"
import r2 from "../../images/Ra Images/r2.png"
import r3 from "../../images/Ra Images/r3.png"
import r4 from "../../images/Ra Images/r4.png"




const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={r1}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Saad alaoui</span>
        <span className="fpCity">Building 39</span>
        <span className="fpPrice">S.aloaui@aui.ma</span>
        <div className="fpRating">
          <button>major</button>
          <span>international studies</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={r2}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nour aloui</span>
        <span className="fpCity">Building 38</span>
        <span className="fpPrice">N.alaoui@aui.ma</span>
        <div className="fpRating">
          <button>major</button>
          <span>Compuser science</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={r3}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Ahmed aloui</span>
        <span className="fpCity">Building 36</span>
        <span className="fpPrice">A.alaoui@aui.ma</span>
        <div className="fpRating">
          <button>major</button>
          <span>Compuser science</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={r4}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Soufiane lamchoudi</span>
        <span className="fpCity">Building 21</span>
        <span className="fpPrice">S.lamchoudi@aui.ma</span>
        <div className="fpRating">
          <button>major</button>
          <span>Bid data</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
