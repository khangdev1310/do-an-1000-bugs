import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./style";
import popcorn from "./../../../assets/popcorn.png";
import screen from "./../../../assets/screen.png";
import ThanhTien from "./ThanhTien/ThanhTien";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA } from "./modules/redux/constants";

const PhongVe = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
      payload: props.match.params.id,
    });
  }, []);

  return (
    <div>
      <div className={classes.container}>
        <Grid container spacing={0}>
          <Grid
            container
            item
            xs={9}
            spacing={0}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container item xs={6} spacing={0}>
              <Box display="flex">
                <img src={popcorn} width="50px" height="50px" />
                <Box>
                  <Typography>BHD Star - Vincom 3/2</Typography>
                  <Typography>Ngày mai - 12:10 - RẠP 3</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid container item xs={6} spacing={0}>
              <Box display="flex" flexDirection="column">
                <Typography>Thời gian giữ ghế</Typography>
                <Typography>04:15</Typography>
              </Box>
            </Grid>
            <Box style={{ marginTop: "1.5rem" }}>
              <img src={screen} />
            </Box>
          </Grid>
          <Grid container item xs={3} spacing={0} style={{ height: "100%" }}>
            <ThanhTien />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PhongVe;
