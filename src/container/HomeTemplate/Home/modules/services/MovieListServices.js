import axios from "axios";
import { DOMAIN } from "../redux/constants";
import { MA_NHOM } from "./../../../../../SystemServices";

export function fetchMovieApiAction() {
  return axios({
    url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
  });
}

export function fetchLayThongTinHeThongRapApiAction() {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
  });
}

export function fetchLayThongTinLichChieuHeThongRapApiAction(maHeThongRap) {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${MA_NHOM}`,
  });
}
