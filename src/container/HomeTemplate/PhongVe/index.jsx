import { Box, Grid, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStyles } from "./style";
import screen from "./../../../assets/screen.png";
import ThanhTien from "./ThanhTien/ThanhTien";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAN_UP_REDUCER_PHONG_VE,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
} from "./modules/redux/constants";
import Seat from "./Seat";
import SeatEmpty from "./SeatEmpty";
import Summarize from "./Summarize";
import { checkUtils } from "@material-ui/pickers/_shared/hooks/useUtils";
import Swal from "sweetalert2";

const PhongVe = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const infoPhongVe = useSelector((state) => state.PhongVeReducer.infoPhongVe);
  const bookingSeat = useSelector((state) => state.PhongVeReducer?.bookingSeat);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [open, setOpen] = useState(false);
  let checkSeat = 1;
  let validate = true;
  if (!localStorage.getItem("USER")) {
    props.history.push("/");
  }
  useEffect(() => {
    dispatch({
      type: FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
      payload: props.match.params.id,
    });

    return () => {
      dispatch({
        type: CLEAN_UP_REDUCER_PHONG_VE,
      });
    };
  }, []);

  const handleNoti = (icon, title) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
    });
  };

  if (bookingSeat.length > 0) {
    // trên 2 ghế thì mới kiểm tra coi có ghế ở giữa hông
    if (bookingSeat.length > 1) {
      let getBookingSeat = [...bookingSeat];
      let middleStt = null;
      getBookingSeat.sort((a, b) => parseInt(a.stt) - parseInt(b.stt));
      getBookingSeat.map((seat1, index1) => {
        getBookingSeat.map((seat2, index2) => {
          if (index1 !== index2 && index1 < index2) {
            if (parseInt(seat1.stt) + 1 === parseInt(seat2.stt) - 1) {
              middleStt = parseInt(seat1.stt) + 1;
              return;
            }
          }
        });
      });
      //Kiểm tra xem ghế giữa đã có chọn chưa
      if (middleStt) {
        let index = getBookingSeat.findIndex((check) => {
          return parseInt(check.stt) === middleStt;
        });
        if (index === -1) {
          handleNoti("warning", "Bạn không thể bỏ trống 1 ghế ở giữa");
          validate = false;
        }
      }
    }
    bookingSeat.map((booking, index) => {
      if ((parseInt(booking.stt) + 1) % 16 == 0) {
        handleNoti("warning", "Bạn không thể bỏ trống 1 ghế ở đuôi mỗi dãy");
        validate = false;
      } else {
        let firstSeatRow = 1;
        for (let i = 1; i <= 11; i++) {
          if (parseInt(booking.stt) - 1 == firstSeatRow) {
            handleNoti("warning", "Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy");
            validate = false;
          } else {
            firstSeatRow += 16;
          }
        }
      }
    });
  }
//   const countDownTime = () => {
//     if (seconds == 0) {
//       setSeconds(59);
//       setMinutes(minutes - 1);
//     } else {
//       setSeconds(seconds - 1);
//     }
//   };

//   useEffect(() => {
//     const token = setTimeout(countDownTime, 1000);
//     if (seconds == 0 && minutes == 0) {
//       clearTimeout(token);
//       setOpen(true);
//     }

//     return () => {
//       clearTimeout(token);
//     };
//   });

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
            <Button
              onClick={() => window.location.reload()}
              className={classes.datVeLai}
            >
              Đặt vé lại
            </Button>
          </div>
        </Fade>
      </Modal>
    );
  };

  const renderSeat = () => {
    // console.log(1);
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
      // if (index === checkSeat) {
      //   checkSeat += 12;
      //   return (
      //     <>
      //       <Seat gheInfo={ghe} />
      //       <SeatEmpty />
      //     </>
      //   );
      // } else if (index === checkSeat) {
      //   checkSeat += 3;
      //   return (
      //     <>
      //       <Seat gheInfo={ghe} />
      //       <SeatEmpty />
      //     </>
      //   );
      // }
      return (
        <>
          <Seat gheInfo={ghe} />
        </>
      );
    });
  };

  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={classes.titleTheaterSpan}>
            Thời gian giữ ghế
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box className={classes.countDownWrapper}>
              <Typography className={classes.countDown}>
                {minutes.toString().length < 2 ? "0" + minutes : minutes}
              </Typography>
            </Box>
            <Typography className={classes.haiCham}>:</Typography>
            <Box className={classes.countDownWrapper}>
              <Typography className={classes.countDown}>
                {seconds.toString().length < 2 ? "0" + seconds : seconds}
              </Typography>
            </Box>
          </Box>
        </Box>
        {handleOpenModal()}
        <Grid container spacing={0} style={{ flexDirection: "column" }}>
          <Grid
            container
            item
            xs={12}
            spacing={0}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                marginTop: "1.5rem",
              }}
              className={classes.overflow}
            >
              <img src={screen} className={classes.overflow} />
              <Box className={classes.overflow}>
                <Box className={classes.renderSeatWrapper}>{renderSeat()}</Box>
              </Box>
            </Box>
          </Grid>
          <Box>
            <Summarize />
          </Box>
          <ThanhTien infoPhongVe={infoPhongVe} validate={validate} />
        </Grid>
      </div>
    </div>
  );
};

export default PhongVe;
