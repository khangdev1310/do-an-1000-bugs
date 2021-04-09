// DOMAIN
export const DOMAIN = `https://movie0706.cybersoft.edu.vn/api`;

/* Action từ Component request lên SAGA */
//Lấy chi tiết một bộ phim dựa trên params ID
export const FETCH_THONG_TIN_PHIM_REQUESTS_SAGA =
  "fetch_thong_tin/FETCH_THONG_TIN_PHIM_REQUESTS_SAGA";

/*Action từ SAGA request lên Reducer */
//Trạng thái lấy chi tiết một bộ phim để xuất ra DetailMovie dựa trên params ID
export const FETCH_THONG_TIN_PHIM_REQUESTS =
  "fetch_thong_tin/FETCH_THONG_TIN_PHIM_REQUESTS";
export const FETCH_THONG_TIN_PHIM_SUCCESS =
  "fetch_thong_tin/FETCH_THONG_TIN_PHIM_SUCCESS";
export const FETCH_THONG_TIN_PHIM_FAILED =
  "fetch_thong_tin/FETCH_THONG_TIN_PHIM_FAILED";

/*Action từ component thẳng lên reducer */
export const FETCH_THONG_TIN_PHIM_CLEAN_UP =
  "fetch_thong_tin/THONG_TIN_PHIM_CLEAN_UP";
