import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import GridLoader from "react-spinners/GridLoader";
import b1 from "../../images/buildings/b1.jpeg"
import b2 from "../../images/buildings/b2.jpeg"
import b3 from "../../images/buildings/b3.jpeg"
import b4 from "../../images/buildings/b4.jpeg"
import b5 from "../../images/buildings/b5.jpeg"
import b6 from "../../images/buildings/b5.jpeg"




const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/');
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const URL =  `http://127.0.0.1:5000/api/buildings/find/${id[2]}`
  const {data,error,loading} = useFetch(URL);
  const photos = [
   b1,
   b2,
   b3,
   b4,
   b5,
   b6
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  // const {date} = useContext(SearchContext)
  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // function dayDifference(date1, date2) {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // }

  // const days = dayDifference(date[0].endDate, date[0].startDate);

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {
        loading ? (<div className="spinner-logo">
        <GridLoader color={"#086425"} size={20} />
      </div>) :(
          <>
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="close"
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img src={photos[slideNumber]} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">Building {data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.description}</span>
              </div>
              <span className="hotelDistance">
                Excellent location – {data.name}
              </span>
              <span className="hotelPriceHighlight">
                Book a stay of an average price 5000dh to 1000dh
              </span>
              <div className="hotelImages">
                {photos.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">Stay in the heart of Campus</h1>
                  <p className="hotelDesc">
                   {data.description}
                  </p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a semester to stay!</h1>
                  <span>
                    {data.description} - good place to reside
                  </span>
                  <h2>
                    {/* <b>$945</b> {days} days */}
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>

          </>
        )
      }
    </div>
  );
};

export default Hotel;
