import React from "react";
import { v4 as uuidv4 } from "uuid";
import poster1 from "./../../assets/promotion1.jpeg";
import poster2 from "./../../assets/promotion2.jpeg";
import poster3 from "./../../assets/promotion3.jpeg";
import poster4 from "./../../assets/promotion4.jpeg";
import { Carousel } from "3d-react-carousal";
// import "./style.css";

let slides = [
  <img
    src={poster1}
    alt="1"
    width="600px"
    height="350px"
    style={{ borderRadius: "15px" }}
  />,
  <img
    src={poster2}
    alt="2"
    width="600px"
    height="350px"
    style={{ borderRadius: "15px" }}
  />,
  <img
    src={poster3}
    alt="3"
    width="600px"
    height="350px"
    style={{ borderRadius: "15px" }}
  />,
  <img
    src={poster4}
    alt="3"
    width="600px"
    height="350px"
    style={{ borderRadius: "15px" }}
  />,
];
const Test = () => {
  return <Carousel slides={slides} autoplay={true} interval={3500} />;
};

export default Test;
