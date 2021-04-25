import React from "react";
import { useStyle } from "./style";
import poster1 from "../../../assets/promotion1.jpeg";
import poster2 from "../../../assets/promotion2.jpeg";
import poster3 from "../../../assets/promotion3.jpeg";
import poster4 from "../../../assets/promotion4.jpeg";
import { Carousel } from "3d-react-carousal";
import { Box, Grid, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useParams } from "react-router-dom";

import "./style.css";

const Promotion = (props) => {
  const classes = useStyle();
  let params = useParams();
  let slides = [
    <img src={poster1} alt="1" className={classes.img} />,
    <img src={poster2} alt="2" className={classes.img} />,
    <img src={poster3} alt="3" className={classes.img} />,
    <img src={poster4} alt="4" className={classes.img} />,
  ];

  return (
    <Box className={classes.bgColor}>
      <Box className={classes.container}>
        <Carousel slides={slides} autoplay={true} interval={5000} />
      </Box>
      <Box className={classes.containerNews}>
        <Box>
          <Typography className={classes.titleNews}>Tin tức</Typography>
        </Box>
        <Box style={{ margin: "0 1rem" }}>
          <Grid container spacing={0}>
            <Grid container item xs={12}>
              <Typography>
                <NavigateNextIcon />
                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              <Typography>
                <NavigateNextIcon />
                BHD 59K/VÉ CẢ TUẦN !!!
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              <Typography>
                <NavigateNextIcon />
                NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              <Typography>
                <NavigateNextIcon />
                TIX 1K/VÉ NGẠI CHI GIÁ VÉ
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <hr color="#afafaf" />
      </Box>
    </Box>
  );
};

export default Promotion;
