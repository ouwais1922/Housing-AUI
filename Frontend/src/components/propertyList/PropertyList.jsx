import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import single from "../../images/single.jpg"
import double from "../../images/double.jpg"
import triple from "../../images/triple.jpg"
import studio from "../../images/studio.jpg"
import appartment from "../../images/appartment.jpg"
const PropertyList = () => {
  const URL = "http://localhost:5000/api/rooms/find/countbytype"
  const {data,error,loading} = useFetch(URL);

  const images = [
    single,
    double,
    triple,
    studio,
    appartment
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;