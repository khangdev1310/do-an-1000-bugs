import {
  AppBar,
  Box,
  Button,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyle } from "./style";
import poster1 from "./../../../assets/the100.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import "./style.css";
import "./../../../components/CirclePercents/css/circle.css";
import GradeIcon from "@material-ui/icons/Grade";
import SendIcon from "@material-ui/icons/Send";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";
import SubjectIcon from "@material-ui/icons/Subject";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import {
  FETCH_THONG_TIN_PHIM_CLEAN_UP,
  FETCH_THONG_TIN_PHIM_REQUESTS_SAGA,
} from "./modules/redux/constants";
import TabContainer from "../../../components/LichChieuDetail/TabContainer";

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

const Detail = (props) => {
  const classes = useStyle();
  const movieDetail = useSelector(
    (state) => state.MovieDetailReducer.movieDetail
  );
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch({
      type: FETCH_THONG_TIN_PHIM_REQUESTS_SAGA,
      maPhim: props.match.params.id.substring(
        props.match.params.id.length - 4,
        props.match.params.id.length
      ),
    });
    return () => {
      dispatch({
        type: FETCH_THONG_TIN_PHIM_CLEAN_UP,
      });
    };
  }, []);

  return (
    <>
      <Box className={classes.bgColor}>
        <div
          className="background background-filter"
          style={{ backgroundImage: `url(${movieDetail?.hinhAnh})` }}
        >
          <Box className="u-non-blurred">
            <Link to="/movie">
              <ArrowBackIosIcon className={classes.backIcon} />
            </Link>
            <Box className={`${classes.container}`}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                      <Box>
                        <img
                          src={movieDetail?.hinhAnh}
                          width="90%"
                          style={{ borderRadius: "10px" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Box display="flex" className={classes.describeTitle}>
                        <Grid container spacing={1}>
                          <Grid item xs={9}>
                            <Box>
                              <Typography className={classes.mainTitle}>
                                {movieDetail?.tenPhim}
                              </Typography>
                              <Typography>Thời lượng: 113 phút</Typography>
                              <Box
                                display="flex"
                                alignItems="flex-start"
                                justifyItems="flex-start"
                                className={classes.reviewContainer}
                              >
                                <Box>
                                  <VisibilityIcon />
                                  <Typography>3325</Typography>
                                </Box>
                                <Box>
                                  <StarIcon />
                                  <Typography>325</Typography>
                                </Box>
                                <Box>
                                  <SubjectIcon />
                                  <Typography>325</Typography>
                                </Box>
                              </Box>
                              <Typography>Nhà sản xuất: Gia An</Typography>
                              <Typography>Quốc gia: Mỹ</Typography>
                              <Typography>Thể loại</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Box
                              display="flex"
                              style={{
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                // alignItems: "center",
                                height: "100%",
                              }}
                            >
                              <div
                                className={`c100 p${
                                  movieDetail?.danhGia.length > 0
                                    ? movieDetail?.danhGia
                                    : movieDetail?.danhGia + "0"
                                }`}
                              >
                                <span>{movieDetail?.danhGia}</span>
                                <div className="slice">
                                  <div className="bar"></div>
                                  <div className="fill"></div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <GradeIcon />
                                <GradeIcon />
                                <GradeIcon />
                              </div>
                              <div style={{ marginTop: "0.5rem" }}>
                                <Typography>
                                  {movieDetail?.danhGia} người đánh giá
                                </Typography>
                              </div>
                            </Box>
                          </Grid>
                        </Grid>
                        <Box>
                          <Typography>&nbsp;</Typography>
                          <Typography>Nội dung</Typography>
                          <Typography>{movieDetail?.moTa}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Box>
            <Box className={classes.tabs}>
              <AppBar position="static" className={classes.bgNavTab}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  centered
                >
                  <Tab label="Lịch chiếu" {...a11yProps(0)} />
                  <Tab label="Đánh giá" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Box className={classes.container}>
                  <Grid container spacing={1}>
                    <TabContainer />
                  </Grid>
                </Box>
              </TabPanel>
              {/* <TabPanel value={value} index={1}>
                <Box className={classes.containerForComment}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Box className={classes.userComment}>
                        <Grid container spacing={2}>
                          <Grid item xs={2}>
                            <img
                              src={poster1}
                              width="60px"
                              height="60px"
                              style={{
                                borderRadius: "50%",
                                margin: "1rem 0rem 0rem 0.5rem",
                              }}
                            />
                          </Grid>
                          <Grid item xs={10}>
                            <Box style={{ marginBottom: "0.7rem" }}>
                              <GradeIcon />
                              <GradeIcon />
                              <GradeIcon />
                              <GradeIcon />
                              <GradeIcon />
                            </Box>
                            <div className={classes.root}>
                              <TextField
                                className={classes}
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                label="Cho người khác biết đánh giá của bạn về phim"
                                InputProps={{
                                  className: classes.inputRoot,
                                }}
                                fullWidth
                                multiline
                                rows={4}
                              />
                            </div>
                            <Box
                              display="grid"
                              style={{ justifyContent: "flex-end" }}
                            >
                              <Button
                                variant="contained"
                                className={classes.buttonBuyTicket}
                              >
                                <SendIcon style={{ color: "#FAFAFA" }} />
                                <Typography
                                  variant="span"
                                  style={{
                                    color: "#FAFAFA",
                                  }}
                                >
                                  Đăng
                                </Typography>
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className={classes.otherUsersComment}>
                        <Grid container spacing={2}>
                          <Grid item xs={2} style={{ color: "#5A5A5A" }}>
                            <Box>
                              <img
                                src={poster1}
                                width="60px"
                                height="60px"
                                style={{
                                  borderRadius: "50%",
                                  margin: "0rem 0rem 0rem 0.5rem",
                                }}
                              />
                            </Box>
                            <Box
                              style={{
                                marginTop: "0.5rem",
                                color: "rgb(236,70,248)",
                              }}
                            >
                              <Typography
                                variant="h5"
                                align="center"
                                style={{ fontWeight: "bold" }}
                              >
                                9.0
                              </Typography>
                              <Box
                                style={{
                                  marginBottom: "0.7rem",
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={10} style={{ color: "#5A5A5A" }}>
                            <Box style={{ marginBottom: "0.7rem" }}>
                              <Typography
                                style={{ fontSize: "1.15rem", color: "#000" }}
                              >
                                Hong Yi Xu
                              </Typography>
                              <Typography style={{ fontSize: "0.8rem" }}>
                                2 ngày trước
                              </Typography>
                            </Box>
                            <div style={{ marginTop: "1.4rem" }}>
                              <Typography style={{ fontSize: "0.9rem" }}>
                                Tưởng không hay ai dè hay không tưởng nhen các
                                bạn. Tưởng không hay ai dè hay không tưởng nhen
                                các bạn.
                              </Typography>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            style={{ color: "#5A5A5A", margin: "0 0.4rem" }}
                          >
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: ".5rem",
                                marginTop: "0rem",
                              }}
                            />
                            <Box display="flex">
                              <FavoriteBorderIcon
                                style={{ color: "#5A5A5A" }}
                              />
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Typography
                                  style={{
                                    marginLeft: "0.3rem",
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  <Typography
                                    variant="span"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    2
                                  </Typography>{" "}
                                  Thích
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className={classes.otherUsersComment}>
                        <Grid container spacing={2}>
                          <Grid item xs={2} style={{ color: "#5A5A5A" }}>
                            <Box>
                              <img
                                src={poster1}
                                width="60px"
                                height="60px"
                                style={{
                                  borderRadius: "50%",
                                  margin: "0rem 0rem 0rem 0.5rem",
                                }}
                              />
                            </Box>
                            <Box
                              style={{
                                marginTop: "0.5rem",
                                color: "rgb(236,70,248)",
                              }}
                            >
                              <Typography
                                variant="h5"
                                align="center"
                                style={{ fontWeight: "bold" }}
                              >
                                9.0
                              </Typography>
                              <Box
                                style={{
                                  marginBottom: "0.7rem",
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={10} style={{ color: "#5A5A5A" }}>
                            <Box style={{ marginBottom: "0.7rem" }}>
                              <Typography
                                style={{ fontSize: "1.15rem", color: "#000" }}
                              >
                                Hong Yi Xu
                              </Typography>
                              <Typography style={{ fontSize: "0.8rem" }}>
                                2 ngày trước
                              </Typography>
                            </Box>
                            <div style={{ marginTop: "1.4rem" }}>
                              <Typography style={{ fontSize: "0.9rem" }}>
                                Tưởng không hay ai dè hay không tưởng nhen các
                                bạn. Tưởng không hay ai dè hay không tưởng nhen
                                các bạn.Tưởng không hay ai dè hay không tưởng
                                nhen các bạn. Tưởng không hay ai dè hay không
                                tưởng nhen các bạn.
                              </Typography>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            style={{ color: "#5A5A5A", margin: "0 0.4rem" }}
                          >
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: ".5rem",
                                marginTop: "0rem",
                              }}
                            />
                            <Box display="flex">
                              <FavoriteBorderIcon
                                style={{ color: "#5A5A5A" }}
                              />
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Typography
                                  style={{
                                    marginLeft: "0.3rem",
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  <Typography
                                    variant="span"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    2
                                  </Typography>{" "}
                                  Thích
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className={classes.otherUsersComment}>
                        <Grid container spacing={2}>
                          <Grid item xs={2} style={{ color: "#5A5A5A" }}>
                            <Box>
                              <img
                                src={poster1}
                                width="60px"
                                height="60px"
                                style={{
                                  borderRadius: "50%",
                                  margin: "0rem 0rem 0rem 0.5rem",
                                }}
                              />
                            </Box>
                            <Box
                              style={{
                                marginTop: "0.5rem",
                                color: "rgb(236,70,248)",
                              }}
                            >
                              <Typography
                                variant="h5"
                                align="center"
                                style={{ fontWeight: "bold" }}
                              >
                                9.0
                              </Typography>
                              <Box
                                style={{
                                  marginBottom: "0.7rem",
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                                <GradeIcon style={{ fontSize: "0.8rem" }} />
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={10} style={{ color: "#5A5A5A" }}>
                            <Box style={{ marginBottom: "0.7rem" }}>
                              <Typography
                                style={{ fontSize: "1.15rem", color: "#000" }}
                              >
                                Hong Yi Xu
                              </Typography>
                              <Typography style={{ fontSize: "0.8rem" }}>
                                2 ngày trước
                              </Typography>
                            </Box>
                            <div style={{ marginTop: "1.4rem" }}>
                              <Typography style={{ fontSize: "0.9rem" }}>
                                Tưởng không hay ai dè.
                              </Typography>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            style={{ color: "#5A5A5A", margin: "0 0.4rem" }}
                          >
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: ".5rem",
                                marginTop: "0rem",
                              }}
                            />
                            <Box display="flex">
                              <FavoriteBorderIcon
                                style={{ color: "#5A5A5A" }}
                              />
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Typography
                                  style={{
                                    marginLeft: "0.3rem",
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  <Typography
                                    variant="span"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    2
                                  </Typography>{" "}
                                  Thích
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel> */}
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};
export default Detail;
