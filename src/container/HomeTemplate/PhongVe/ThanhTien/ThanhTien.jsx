import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import propCorn from "./../../../../assets/popcornCheckout.png";
import ErrorIcon from "@material-ui/icons/Error";
import Combo from "../Combo";
import { useSelector, useDispatch } from "react-redux";
import { POST_THONG_TIN_DAT_VE_REQUESTS_SAGA } from "../modules/redux/constants";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const ThanhTien = ({ infoPhongVe, maLichChieu }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [comboStatus, setComboStatus] = useState(false);
  const priceSeat = useSelector(
    (state) => state.PhongVeReducer?.totalPriceSeat
  );
  const priceCombo = useSelector(
    (state) => state.PhongVeReducer?.totalPriceCombo
  );
  const priceAll = useSelector((state) => state.PhongVeReducer?.totalPrice);
  const bookingSeat = useSelector((state) => state.PhongVeReducer?.bookingSeat);
  const { taiKhoan, email, soDT, accessToken } = JSON.parse(
    localStorage.getItem("USER")
  );
  console.log(taiKhoan);
  const [datVe, setDatVe] = useState({
    maLichChieu,
    danhSachVe: [],
    taiKhoanNguoiDung: taiKhoan,
  });

  if (!infoPhongVe) {
    return null;
  }

  const { thongTinPhim } = infoPhongVe;

  const handleDispatch = () => {
    let danhSachVe = [];
    bookingSeat.forEach((danhSach) => {
      let { maGhe, giaVe } = danhSach;
      danhSachVe.push({ maGhe, giaVe });
    });
    datVe.danhSachVe = danhSachVe;
    console.log(datVe);
    if (datVe.danhSachVe.length > 0) {
      dispatch({
        type: POST_THONG_TIN_DAT_VE_REQUESTS_SAGA,
        payload: { datVe, accessToken },
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Bạn chưa chọn ghế",
      });
    }
  };

  const renderSeat = () => {
    if (bookingSeat.length > 0) {
      return bookingSeat.map((seat, index) => {
        if (index === 0) {
          return (
            <Typography
              style={{ display: "inline", fontSize: "14px" }}
              key={uuidv4()}
            >
              {seat.tenGhe}
            </Typography>
          );
        }
        return (
          <Typography
            style={{ display: "inline", fontSize: "14px" }}
            key={uuidv4()}
          >
            , {seat.tenGhe}
          </Typography>
        );
      });
    }
  };
  return (
    <div className={classes.container}>
      <Combo comboStatus={comboStatus} />
      <div className={classes.contents}>
        <Box className={classes.items}>
          <Typography className={classes.total}>{priceAll} đ</Typography>
        </Box>
        <Box className={classes.items}>
          <Typography className={classes.movieTitle}>
            {thongTinPhim.tenPhim}
          </Typography>
          <Typography className={classes.movieText}>
            {thongTinPhim.tenCumRap}
          </Typography>
          <Typography className={classes.movieText}>
            Ngày mai {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
            {thongTinPhim.tenRap}
          </Typography>
        </Box>
        <Box className={classes.items}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography className={classes.soGhe}>
                Ghế {renderSeat()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.soGhe}
                style={{ textAlign: "right" }}
              >
                {priceSeat} đ
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.items}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box onClick={() => setComboStatus(!comboStatus)}>
                <img
                  src={propCorn}
                  style={{ marginRight: "9px", width: "17px", height: "22px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.soGhe}
                style={{ textAlign: "right" }}
              >
                {priceCombo} đ
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.itemsTextField}>
          <TextField
            id="standard-basic"
            label="Email"
            InputProps={{ disableUnderline: true }}
            disabled
            defaultValue={email}
          />
        </Box>
        <Box className={classes.itemsTextField}>
          <TextField
            id="standard-basic"
            label="Số điện thoại"
            InputProps={{ disableUnderline: true }}
            disabled
            defaultValue={soDT}
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
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            onClick={() => handleDispatch()}
          >
            Đặt vé
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ThanhTien;
