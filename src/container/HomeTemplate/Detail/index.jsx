import {
  AppBar,
  Box,
  Button,
  Grid,
  Paper,
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
  const [state, setState] = useState({
    id: null,
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getParams();
  }, []);

  const getParams = () => {
    console.log(props.match.params.id);
    setState({
      id: props.match.params.id,
    });
  };

  return (
    <div>
      <Box className={classes.bgColor}>
        <div className="background background-filter">
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
                          src={poster1}
                          width="100%"
                          style={{ borderRadius: "10px" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={5}>
                      <Box display="flex" className={classes.describeTitle}>
                        <Box>
                          <Typography>26.03.2021</Typography>
                          <Typography className={classes.mainTitle}>
                            The 100
                          </Typography>
                          <Typography>
                            100 phút - 0 IMDb - 2D/Digital
                          </Typography>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            className={classes.orderTicketBtn}
                          >
                            Mua vé
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        display="flex"
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        <div className="c100 p50">
                          <span>5</span>
                          <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                          </div>
                        </div>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <GradeIcon />
                          <GradeIcon />
                          <GradeIcon />
                        </div>
                        <div style={{ marginTop: "0.5rem" }}>
                          <Typography>10 người đánh giá</Typography>
                        </div>
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
                  <Tab label="Thông tin" {...a11yProps(1)} />
                  <Tab label="Đánh giá" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Box className={classes.container}>
                  <Grid container spacing={1}></Grid>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={6}>
                    <Grid container item xs={12} spacing={3}>
                      <Grid item xs={6}>
                        <Box>
                          <Typography>Ngày công chiếu</Typography>
                          <Typography>Đạo diễn</Typography>
                          <Typography>Diễn viên</Typography>
                          <Typography>Thể Loại</Typography>
                          <Typography>Định dạng</Typography>
                          <Typography>Quốc Gia SX</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography>26.03.2021</Typography>
                          <Typography>&nbsp;</Typography>
                          <Typography>&nbsp;</Typography>
                          <Typography>Hoạt hình</Typography>
                          <Typography>2D/Digital</Typography>
                          <Typography>&nbsp;</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography>Nội dung</Typography>
                      <Typography>
                        Bộ phim hoạt hình siêu thú vị về cuộc phiêu lưu của các
                        bạn trẻ: Noah, Finny, Leah và đồng bọn. Chuyến tàu của
                        Noah, cùng hai người bạn thân là Finny và Leah bị trôi
                        dạt trên biển khơi. Sau nhiều tuần trôi qua, lượng thức
                        ăn dần cạn kiệt. Hoà bình giữa động vật ăn cỏ và động
                        vật ăn thịt trở nên mong manh và có thể tan vỡ bất cứ
                        lúc nào. Sau hàng loạt những sự kiện không may xảy ra,
                        Leah cùng đồng bọn, và cả người bạn mới của mình là
                        Jelly vô tình bị cuốn đến một hòn đảo xa xôi. Trong khi
                        đó, Finny tỉnh dậy và thấy mình bị lạc trong một thuộc
                        địa kì lạ. Trong cuộc đua chạy trốn với thời gian, thuỷ
                        triều, núi lửa và những chấn động kinh hoàng, Finny phải
                        cứu bạn của mình, trở về đoạn tụ với gia đình, và cứu cả
                        một thuộc địa khỏi sự huỷ diệt hoàn toàn.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
};
export default Detail;
