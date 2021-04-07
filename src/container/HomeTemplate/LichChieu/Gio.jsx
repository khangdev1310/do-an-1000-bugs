import React from "react";
import { Box } from "@material-ui/core";

const Gio = ({ gios }) => {
  const renderGio = () => {
    return gios.map((gio) => {
      return (
        <Box
          style={{
            cursor: "pointer",
            padding: "0.5rem 1rem",
            backgroundColor: "pink",
            margin: "0.5rem ",
            borderRadius: "7px",
            display: "inline-block",
          }}
          onClick={() => {
            console.log(gio.maLichChieu);
          }}
        >
          {gio.ngayChieuGioChieu.slice(5, 10)}~
          {gio.ngayChieuGioChieu.slice(-8, -3)}
        </Box>
      );
    });
  };
  return <div>{renderGio()}</div>;
};

export default Gio;
