import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import propCorn from "./../../../../assets/popcornCheckout.png";
import ErrorIcon from "@material-ui/icons/Error";

const ThanhTien = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contents}>
        <Box className={classes.items}>
          <Typography className={classes.total}>0 đ</Typography>
        </Box>
        <Box className={classes.items}>
          <Typography className={classes.movieTitle}>Bố Già</Typography>
          <Typography className={classes.movieText}>
            BHD Star - Vincom 3/2
          </Typography>
          <Typography className={classes.movieText}>
            Ngày mai 06/04/2021 - 12:10 - RẠP 3
          </Typography>
        </Box>
        <Box className={classes.items}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography className={classes.soGhe}>Ghế</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.soGhe}
                style={{ textAlign: "right" }}
              >
                0 đ
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.items}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <img
                src={propCorn}
                style={{ marginRight: "9px", width: "17px", height: "22px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.soGhe}
                style={{ textAlign: "right" }}
              >
                0 đ
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.itemsTextField}>
          <TextField
            id="standard-basic"
            label="Email"
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box className={classes.itemsTextField}>
          <TextField
            id="standard-basic"
            label="Số điện thoại"
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box className={classes.itemsTextField}>
          <TextField
            id="standard-basic"
            label="Mã giảm giá"
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box style={{ marginTop: "0.5rem" }}>
          <Typography className={classes.titleSpan}>
            Hình thức thanh toán
          </Typography>
          <Typography className={classes.pleased}>
            Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
          </Typography>
        </Box>
        <Box>
          <Box className={classes.notice}>
            <Typography align="center" className={classes.noticeText}>
              <ErrorIcon
                style={{ color: "rgb(236,70,248)", marginRight: "8px" }}
              />
              Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin
              nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
            </Typography>
          </Box>
          <Button variant="contained" className={classes.button}>
            Đặt vé
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ThanhTien;
