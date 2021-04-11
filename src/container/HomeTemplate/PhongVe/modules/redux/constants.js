// DOMAIN
export const DOMAIN = `https://movie0706.cybersoft.edu.vn/api`;

/* Action từ Component request lên SAGA */
//Lấy chi tiết một bộ phim dựa trên params ID
export const FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA";

/*Action từ SAGA request lên Reducer */
//Trạng thái lấy chi tiết một bộ phim để xuất ra DetailMovie dựa trên params ID
export const FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS";
export const FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS";
export const FETCH_LAY_DANH_SACH_PHONG_VE_FAILED =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_FAILED";

/*Action từ component thẳng lên reducer */
