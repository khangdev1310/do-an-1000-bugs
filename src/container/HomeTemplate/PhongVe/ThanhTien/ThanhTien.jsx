import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const ThanhTien = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contents}>
        <Box className={classes.items}>
          <Typography className={classes.total}>0 đ</Typography>
        </Box>
        <Box className={classes.items}>
          <Typography>Bố Già</Typography>
          <Typography>BHD Star - Vincom 3/2</Typography>
          <Typography>Ngày mai 06/04/2021 - 12:10 - RẠP 3</Typography>
        </Box>
        <Box className={classes.items}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography>Ghế</Typography>
            </Grid>
            <Grid item xs={6}>
              0 đ
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.items}>
          <TextField
            id="standard-basic"
            label="Email"
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box className={classes.items}>
          <TextField
            id="standard-basic"
            label="Số điện thoại"
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box className={classes.items}>
          <TextField
            id="standard-basic"
            label="Mã giảm giá"
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box>
          <Typography>Hình thức thanh toán</Typography>
          <Typography>
            Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
          </Typography>
        </Box>
        <Box>
          <Box className={classes.notice}>
            <Typography align="center">
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
