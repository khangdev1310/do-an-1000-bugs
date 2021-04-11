import axios from "axios";
import { DOMAIN } from "../redux/constants";
import { MA_NHOM } from "../../../../../SystemServices";

export function fetchLayDanhSachPhongVeApiAction(maCheckout) {
  return axios({
    url: `${DOMAIN}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maCheckout}`,
  });
}
