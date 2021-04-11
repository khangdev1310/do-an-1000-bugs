import { Box } from "@material-ui/core";
import React from "react";

const Gio = ({ gioChieu }) => {
  console.log(gioChieu);

  const renderGio = () => {
    if (gioChieu.length > 0) {
      return gioChieu.map((gios) => {
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
              console.log(gios.maLichChieu);
            }}
          >
            {gios.ngayChieuGioChieu.slice(-8, -3)}
          </Box>
        );
      });
    }
  };
  return <>{renderGio()}</>;
};

export default Gio;
