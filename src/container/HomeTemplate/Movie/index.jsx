import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./style";
import poster1 from "./../../../assets/money-heist.jpg";
import poster2 from "./../../../assets/the100.jpg";
import poster3 from "./../../../assets/tenet.jpg";
import poster4 from "./../../../assets/inception.jpg";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "./style.css";
import MovieItem from "../../../components/MovieItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Movie = () => {
  const classes = useStyle();
  const ref = useRef({});
  const ref1 = useRef({});
  const [value, setValue] = React.useState(0);
  const movieList = useSelector((state) => state.MovieReducer.movieList);

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const next1 = () => {
    ref1.current.slickNext();
  };

  const previous1 = () => {
    ref1.current.slickPrev();
  };

  const ArrowLeft = (props) => (
    <div className={`${classes.prevArrow}`} onClick={previous}>
      <ArrowBackIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );
  const ArrowRight = (props) => (
    <div className={`${classes.nextArrow}`} onClick={next}>
      <ArrowForwardIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );

  const ArrowLeft1 = (props) => (
    <div className={`${classes.prevArrow}`} onClick={previous1}>
      <ArrowBackIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );
  const ArrowRight1 = (props) => (
    <div className={`${classes.nextArrow}`} onClick={next1}>
      <ArrowForwardIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );

  const renderMovieList = () => {
    return movieList.map((movie) => {
      return <MovieItem movie={movie} />;
    });
  };

  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    rows: 1,
    slidesPerRow: 4,
    slidesToScroll: 3,

    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  const settings1 = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 6,
    prevArrow: <ArrowLeft1 />,
    nextArrow: <ArrowRight1 />,
  };

  return (
    <div className={classes.root}>
      <Box className={classes.bgColor}>
        <Box className={classes.container}>
          <Box className={classes.titleContainer} display="flex">
            <div className={classes.titleColor}></div>
            <Typography
              style={{ fontWeight: "500", fontSize: "20px", color: "#FAFAFA" }}
            >
              Phim đang chiếu
            </Typography>
          </Box>
          <Slider {...settings} ref={ref}>
            {renderMovieList()}
          </Slider>
          {/* <Slider {...settings1} ref={ref1}>
            {renderMovieList()}
          </Slider> */}
        </Box>
      </Box>
    </div>
  );
};

export default Movie;
