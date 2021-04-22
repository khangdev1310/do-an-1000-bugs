import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import BookedTicket from "../../../../../components/BookedTicket";
import { useStyles } from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const History = ({ userInfo }) => {
  const classes = useStyles();
  let [limit, setLimit] = useState(5);
  console.log(limit);

  if (!userInfo) {
    return null;
  }

  const renderBookedTicket = () => {
    let arrReverse = [...userInfo.thongTinDatVe].slice(0).reverse();
    return arrReverse.slice(0, limit).map((thongTin, index) => {
      return <BookedTicket thongTin={thongTin} stt={index + 1} />;
    });
  };

  const rows = renderBookedTicket();

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
        {/* <table
          style={{
            display: "block",
            overflowX: "auto",
            whiteSpace: "nowrap",
            margin: "0 auto",
            width: "100%",
            border: "3px solid plum",
            borderRadius: "8px",
          }}
          className="table"
        >
          <thead className={`${classes.thead}`}>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên phim</th>
              <th scope="col">Số ghế</th>
              <th scope="col">Ngày giờ đặt</th>
              <th scope="col">Giá vé</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>{renderBookedTicket()}</tbody>
        </table> */}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Tên phim</TableCell>
                <TableCell>Số ghế</TableCell>
                <TableCell>Ngày giờ đặt</TableCell>
                <TableCell>Giá vé</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderBookedTicket()}</TableBody>
          </Table>
        </TableContainer>
        <Button
          fullWidth
          onClick={() => {
            setLimit((limit += 5));
          }}
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
};

export default History;
