import axios from "axios";
import { DOMAIN } from "../redux/constants";
import { MA_NHOM } from "./../../../../../SystemServices";

export function fetchMovieDetailApiAction(maPhim) {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
  });
}
