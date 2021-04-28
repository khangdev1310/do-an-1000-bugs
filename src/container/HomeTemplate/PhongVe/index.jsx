import { Box, Grid, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStyles } from "./style";
import popcorn from "./../../../assets/popcorn.png";
import screen from "./../../../assets/screen.png";
import ThanhTien from "./ThanhTien/ThanhTien";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA } from "./modules/redux/constants";
import Seat from "./Seat";
import SeatEmpty from "./SeatEmpty";
import Summarize from "./Summarize";
import { useParams } from "react-router-dom";

const PhongVe = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const infoPhongVe = useSelector((state) => state.PhongVeReducer.infoPhongVe);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [open, setOpen] = useState(false);
  let checkSeat = 1;
  console.log(minutes);
  const maLichChieu = props.match.params.id;

  useEffect(() => {
    dispatch({
      type: FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
      payload: props.match.params.id,
    });
  }, []);

  useEffect(() => {
    // const token = setTimeout(countDownTime, 1);
    // if (seconds == 0 && minutes == 0) {
    //   clearTimeout(token);
    //   setOpen(true);
    // }

    return () => {
      // clearTimeout(token);
    };
  });

  if (!infoPhongVe) {
    return null;
  }

  const { thongTinPhim } = infoPhongVe;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography>
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời
              hạn 5 phút
            </Typography>
            <Button onClick={() => window.location.reload()}>Đặt vé lại</Button>
          </div>
        </Fade>
      </Modal>
    );
  };

  const countDownTime = () => {
    if (seconds == 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    } else {
      setSeconds(seconds - 1);
    }
  };

  const renderSeat = () => {
    return infoPhongVe?.danhSachGhe.map((ghe, index) => {
      if ((index + 1) % 16 === 0) {
        checkSeat = index + 2;
        return (
          <>
            <Seat gheInfo={ghe} />
            <br />
          </>
        );
      }
      if (index === checkSeat) {
        checkSeat += 12;
        return (
          <>
            <Seat gheInfo={ghe} />
            <SeatEmpty />
          </>
        );
      } else if (index === checkSeat) {
        checkSeat += 3;
        return (
          <>
            <Seat gheInfo={ghe} />
            <SeatEmpty />
          </>
        );
      }
      return (
        <>
          <Seat gheInfo={ghe} />
        </>
      );
    });
  };

  return (
    <div>
      <div className={classes.container}>
        {handleOpenModal()}
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
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              style={{ width: "800px" }}
            >
              <Box display="flex" alignItems="center">
                <img src={popcorn} width="50px" height="50px" />
                <Box style={{ marginLeft: "1rem" }}>
                  <Typography className={classes.titleTheater}>
                    {thongTinPhim.tenCumRap} -{" "}
                    <Typography
                      style={{ color: "#000", display: "inline" }}
                    ></Typography>
                  </Typography>
                  <Typography className={classes.titleTheaterSpan}>
                    Ngày mai {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}{" "}
                    - {thongTinPhim.tenRap}
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography className={classes.titleTheaterSpan}>
                  Thời gian giữ ghế
                </Typography>
                <Typography className={classes.countDown}>
                  {minutes.toString().length < 2 ? "0" + minutes : minutes}:
                  {seconds.toString().length < 2 ? "0" + seconds : seconds}
                </Typography>
              </Box>
            </Box>
            <Box
              style={{ marginTop: "1.5rem" }}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <img src={screen} />
              <Box>{renderSeat()}</Box>
              <Box>
                <Summarize />
              </Box>
            </Box>
          </Grid>
          <Grid contaziner item xs={3} spacing={0} style={{ height: "100%" }}>
            <ThanhTien infoPhongVe={infoPhongVe} maLichChieu={maLichChieu} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PhongVe;
