import { Box, Typography } from "@material-ui/core";
import React from "react";

const GioChieuPhim = ({ thongTinGioNgayChieus }) => {
  const formatGioNgayChieuPhim = (thongTinGioNgayChieus) => {
    return thongTinGioNgayChieus.map((thongTinGioNgayChieu, index) => {
      return (
        <Box
          style={{
            cursor: "pointer",
            padding: "0.5rem 1rem",
            backgroundColor: "pink",
            margin: "0.5rem ",
            borderRadius: "7px",
          }}
          onClick={() => {
            console.log(thongTinGioNgayChieu.maLichChieu);
          }}
        >
          {thongTinGioNgayChieu.ngayChieuGioChieu.slice(5, 10)}~
          {thongTinGioNgayChieu.ngayChieuGioChieu.slice(-8, -3)}
        </Box>
      );
    });
  };

  return (
    <Box display="flex" style={{ flexWrap: "wrap" }}>
      {formatGioNgayChieuPhim(thongTinGioNgayChieus)}
    </Box>
  );
};

export default GioChieuPhim;
