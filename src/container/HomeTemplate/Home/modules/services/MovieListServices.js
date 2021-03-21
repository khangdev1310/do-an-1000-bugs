import axios from "axios";
import { DOMAIN } from "../redux/constants";

export function fetchMovieApiAction() {
  return axios({
    url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
  });
}
