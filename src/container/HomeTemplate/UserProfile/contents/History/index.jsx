import { Box, Typography } from "@material-ui/core";
import React from "react";
import BookedTicket from "../../../../../components/BookedTicket";
import { useStyles } from "./styles";

const History = ({ userInfo }) => {
  const classes = useStyles();

  if (!userInfo) {
    return null;
  }

  const renderBookedTicket = () => {
    return userInfo.thongTinDatVe.map((thongTin, index) => {
      return <BookedTicket thongTin={thongTin} stt={index + 1} />;
    });
  };

  return (
    <div>
      <div className={classes.borderTest}>
        <Box>
          <Typography className={classes.titleText}>Lịch sử đặt vé</Typography>
          <Typography className={classes.titleSpanText}>
            Bấm vào xem chi tiết để xem số ghế!
          </Typography>
        </Box>
        <hr />
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          className="table"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên phim</th>
              <th scope="col">Số ghế</th>
              <th scope="col">Ngày giờ đặt</th>
              <th scope="col">Giá vé</th>
            </tr>
          </thead>
          <tbody>{renderBookedTicket()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
