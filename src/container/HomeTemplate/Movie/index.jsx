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
  const ref1 = useRef({});
  const ref2 = useRef({});
  const ref3 = useRef({});
  const [value, setValue] = React.useState(0);
  const movieList = useSelector((state) => state.MovieReducer.movieList);

  const next1 = () => {
    ref1.current.slickNext();
  };

  const previous1 = () => {
    ref1.current.slickPrev();
  };

  const next2 = () => {
    ref2.current.slickNext();
  };

  const previous2 = () => {
    ref2.current.slickPrev();
  };

  const next3 = () => {
    ref3.current.slickNext();
  };

  const previous3 = () => {
    ref3.current.slickPrev();
  };

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

  const ArrowLeft2 = (props) => (
    <div className={`${classes.prevArrow}`} onClick={previous2}>
      <ArrowBackIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );
  const ArrowRight2 = (props) => (
    <div className={`${classes.nextArrow}`} onClick={next2}>
      <ArrowForwardIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );

  const ArrowLeft3 = (props) => (
    <div className={`${classes.prevArrow}`} onClick={previous3}>
      <ArrowBackIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );
  const ArrowRight3 = (props) => (
    <div className={`${classes.nextArrow}`} onClick={next3}>
      <ArrowForwardIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );

  const sliceMovieList1 = [...movieList].slice(0, 15).reverse();
  const sliceMovieList2 = [...movieList].slice(16, 31);
  const sliceMovieList3 = [...movieList].slice(32, movieList.length);

  const renderMovieList1 = () => {
    return sliceMovieList1.map((movie, index) => {
      return <MovieItem movie={movie} />;
    });
  };

  const renderMovieList2 = () => {
    return sliceMovieList2.map((movie, index) => {
      return <MovieItem movie={movie} />;
    });
  };

  const renderMovieList3 = () => {
    return sliceMovieList3.map((movie, index) => {
      return <MovieItem movie={movie} />;
    });
  };

  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    swipeToSlide: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToScroll: 3,
    prevArrow: <ArrowLeft1 />,
    nextArrow: <ArrowRight1 />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    slidesToScroll: 3,
    prevArrow: <ArrowLeft2 />,
    nextArrow: <ArrowRight2 />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings3 = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    slidesToScroll: 3,
    prevArrow: <ArrowLeft3 />,
    nextArrow: <ArrowRight3 />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
          <Slider {...settings1} ref={ref1}>
            {renderMovieList1()}
          </Slider>

          <Box className={classes.titleContainer} display="flex">
            <div className={classes.titleColor}></div>
            <Typography
              style={{ fontWeight: "500", fontSize: "20px", color: "#FAFAFA" }}
            >
              Phim doanh thu cao nhất
            </Typography>
          </Box>
          <Slider {...settings2} ref={ref2}>
            {renderMovieList2()}
          </Slider>

          <Box className={classes.titleContainer} display="flex">
            <div className={classes.titleColor}></div>
            <Typography
              style={{ fontWeight: "500", fontSize: "20px", color: "#FAFAFA" }}
            >
              Phim cháy vé
            </Typography>
          </Box>
          <Slider {...settings3} ref={ref3}>
            {renderMovieList3()}
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default Movie;
