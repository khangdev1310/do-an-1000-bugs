import React from "react";
import { useStyles } from "./styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Typography } from "@material-ui/core";

const BookedTicket = ({ thongTin, stt }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const optionsDate = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const optionsTime = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = new Date(thongTin.ngayDat).toLocaleDateString(
    "en-GB",
    optionsDate
  );
  const time = new Date(thongTin.ngayDat).toLocaleTimeString(
    "en-GB",
    optionsTime
  );

  const renderBookedTicket = () => {
    return thongTin.danhSachGhe.map((danhSach) => {
      return (
        <tr>
          <td>{danhSach.tenHeThongRap}</td>
          <td>{danhSach.tenCumRap}</td>
          <td>{danhSach.tenGhe}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <tr>
        <th scope="row">{stt}</th>
        <td>{thongTin.tenPhim}</td>
        <td>
          <Box onClick={handleOpen} style={{ cursor: "pointer" }}>
            <Typography>[Chi tiết]</Typography>
          </Box>
        </td>
        <td>{`${date} - ${time}`}</td>
        <td>{thongTin.giaVe} vnđ</td>
      </tr>
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
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
              className="table"
            >
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Tên hệ thống rạp</th>
                  <th scope="col">Tên rạp</th>
                  <th scope="col">Số ghế</th>
                </tr>
              </thead>
              <tbody>{renderBookedTicket()}</tbody>
            </table>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default BookedTicket;
