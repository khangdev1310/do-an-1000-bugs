import React, { useRef } from "react";
import { useStyles } from "./style";
import Slider from "react-slick";
import poster1 from "./../../assets/money-heist.jpg";
import poster2 from "./../../assets/the100.jpg";
import poster3 from "./../../assets/tenet.jpg";
import poster4 from "./../../assets/movie.jpg";
import { Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MovieFilterSharpIcon from "@material-ui/icons/MovieFilterSharp";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Carousel = () => {
  const classes = useStyles();
  const ref = useRef({});

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

  const settings = {
    infinite: true,
    arrows: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    dots: true,
    dotsClass: `slick-dots ${classes.dots}`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.bgColor}`}>
        <Grid container className={classes.header}>
          <Grid item xs={6} className={`${classes.headerItem}`}>
            <MovieFilterSharpIcon
              className={`${classes.logo}`}
              style={{ margin: "0px 1rem 0 4.5rem", color: "#FAFAFA" }}
            />
            <h1 className={`${classes.logo}`} style={{ fontWeight: "700" }}>
              Now showing
            </h1>
          </Grid>
          <Grid item xs={6} className={classes.headerItem}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
        </Grid>
        <div className={classes.carousel}>
          <Slider ref={ref} {...settings}>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img
                    alt="alo alo"
                    src={poster1}
                    style={{
                      width: "275px",
                      height: "375px",
                      margin: "0 auto",
                    }}
                  />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img
                    src={poster2}
                    style={{
                      width: "275px",
                      height: "375px",
                      margin: "0 auto",
                    }}
                  />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img
                    src={poster3}
                    style={{
                      width: "275px",
                      height: "375px",
                      margin: "0 auto",
                    }}
                  />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img
                    src={poster4}
                    style={{
                      width: "275px",
                      height: "375px",
                      margin: "0 auto",
                    }}
                  />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
