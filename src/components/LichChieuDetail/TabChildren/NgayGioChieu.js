import React from "react";
import Gio from "./Gio";
import Rap from "./Rap";

const NgayGioChieu = ({ day, rapChieu }) => {
  const iterRapChieu = rapChieu?.map((rap) => {
    return rap.lichChieuPhim?.map((lichChieu) => {
      return lichChieu;
    });
  });
  console.log(iterRapChieu);
  console.log(day);

  const gioChieu = iterRapChieu?.map((gio, index) => {
    return gio.filter((ngayGio) => {
      {
        console.log(new Date(ngayGio.ngayChieuGioChieu).toLocaleDateString());
      }
      return new Date(ngayGio.ngayChieuGioChieu).toLocaleDateString() === day;
    });
  });

  return (
    <>
      <Rap gioChieu={gioChieu} rapChieu={rapChieu} />
    </>
  );
};

export default NgayGioChieu;
