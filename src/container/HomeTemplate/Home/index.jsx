import React, { useEffect } from "react";
import Carousel from "../../../components/Carousel";
import Footer from "../../../components/Footer";
// import { useSelector, useDispatch } from "react-redux";
// import { FETCH_MOVIES_REQUESTS_SAGA } from "./modules/redux/constants";

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: FETCH_MOVIES_REQUESTS_SAGA,
  //   });
  // }, []);

  return (
    <div>
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
