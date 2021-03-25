import React, { useEffect } from "react";
import BookingTicketBar from "../../../components/BookingTicketBar";
import Carousel from "../../../components/Carousel";
import Footer from "../../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
  FETCH_MOVIES_REQUESTS_SAGA,
} from "./modules/redux/constants";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_MOVIES_REQUESTS_SAGA,
    });
    dispatch({
      type: FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
    });
  }, []);

  return (
    <div>
      <Carousel />
      <BookingTicketBar />
    </div>
  );
};

export default Home;
