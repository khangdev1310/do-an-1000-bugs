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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Movie = () => {
  const classes = useStyle();
  const ref = useRef({});
  const [value, setValue] = React.useState(0);
  const movieList = useSelector((state) => state.MovieReducer.movieList);

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderMovieList = () => {
    return movieList.map((movie) => {
      return <MovieItem movie={movie} />;
    });
  };

  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <div className={classes.root}>
      <Box className={classes.bgColor}>
        <Box className={classes.container}>
          <AppBar position="static" className={classes.bgNavTab}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
            >
              <Tab label="Đang chiếu" {...a11yProps(0)} />
              <Tab label="Sắp chiếu" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Slider {...settings} ref={ref}>
              {renderMovieList()}
            </Slider>
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
};

export default Movie;
