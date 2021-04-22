import React, { useEffect } from "react";
import Carousel from "../../../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../Movie";

const Home = () => {
  const movieList = useSelector((state) => state.MovieReducer.movieList);
  let arrRandom = [];
  for (let i = 0; i < 6; i++) {
    arrRandom.push(movieList[i]);
  }

  return (
    <div>
      <Carousel movieList={arrRandom} />
      <Movie />
    </div>
  );
};

export default React.memo(Home);
