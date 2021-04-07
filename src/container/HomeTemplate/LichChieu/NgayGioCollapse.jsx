import { Box, Typography } from "@material-ui/core";
import React from "react";
import Gio from "./Gio";

const NgayGioCollapse = ({ gios }) => {
  const formatGioNgayChieuPhim = (gios) => {
    return gios.map((gio) => {
      return (
        <Box style={{ minWidth: "500px" }}>
          <Typography>
            Ngày: {gio[0].ngayChieuGioChieu.substring(0, 10)}
          </Typography>
          <Gio gios={gio} />
        </Box>
      );
    });
  };

  return <div>{formatGioNgayChieuPhim(gios)}</div>;
};

export default NgayGioCollapse;
