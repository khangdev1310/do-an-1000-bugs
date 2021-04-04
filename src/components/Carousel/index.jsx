import React, { useRef } from "react";
import { useStyles } from "./style";
import Slider from "react-slick";
import poster1 from "./../../assets/money-heist.jpg";
import poster2 from "./../../assets/the100.jpg";
import poster3 from "./../../assets/tenet.jpg";
import poster4 from "./../../assets/inception.jpg";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import podcast from "./../../assets/podcast.svg";

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
    slidesToScroll: 3,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    dots: false,
    dotsClass: `slick-dots ${classes.dots}`,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
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
          <Grid
            item
            md={6}
            className={`${classes.headerItem}`}
            style={{ justifyContent: "flex-start" }}
          >
            <Box display="flex">
              <img src={podcast} width="30px" />
              <Typography
                variant="h4"
                style={{ fontWeight: "500", marginLeft: "1rem" }}
              >
                Phim đang chiếu
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} className={classes.headerItem}>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm phim…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              </div> */}
          </Grid>
        </Grid>
        <Box className={classes.carousel}>
          <Slider ref={ref} {...settings}>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img src={poster1} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={6} className={classes.stackItem}>
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

                    <Grid item xs={6} className={classes.stackItem}>
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
                  <img src={poster2} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={6} className={classes.stackItem}>
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

                    <Grid item xs={6} className={classes.stackItem}>
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
                  <img src={poster3} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={6} className={classes.stackItem}>
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

                    <Grid item xs={6} className={classes.stackItem}>
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
                  <img src={poster4} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={6} className={classes.stackItem}>
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
                    <Grid item xs={6} className={classes.stackItem}>
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
        </Box>
      </div>
    </div>
  );
};

export default Carousel;
