// DOMAIN
export const DOMAIN = `https://movie0706.cybersoft.edu.vn/api`;

/* Action từ Component request lên SAGA */
//Lấy post thông tin  user lên SAGA
export const POST_THONG_TIN_DANG_NHAP_REQUESTS_SAGA =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_REQUESTS_SAGA";

//lấy post thông tin đăng nhập bằng facebook lên SAGA
export const POST_THONG_TIN_DANG_NHAP_FACEBOOK_REQUESTS_SAGA =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_FACEBOOK_REQUESTS_SAGA";

/*Action từ SAGA request lên Reducer */
//Trạng thái validate tài khoản mật khẩu user
export const POST_THONG_TIN_DANG_NHAP_REQUESTS =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_REQUESTS";
export const POST_THONG_TIN_DANG_NHAP_SUCCESS =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_SUCCESS";
export const POST_THONG_TIN_DANG_NHAP_FAILED =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_FAILED";

//Trạng thái facebook đã đăng nhập lần nào chưa
export const POST_THONG_TIN_DANG_NHAP_FACEBOOK_REQUESTS =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_FACEBOOK_REQUESTS";
export const POST_THONG_TIN_DANG_NHAP_FACEBOOK_SUCCESS =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_FACEBOOK_SUCCESS";
export const POST_THONG_TIN_DANG_NHAP_FACEBOOK_FAILED =
  "post_thong_tin_dang_nhap/POST_THONG_TIN_DANG_NHAP_FACEBOOK_FAILED";

//lấy post thông tin đăng kí facebook (đăng nhập nếu failed)
export const POST_THONG_TIN_DANG_KI_FACEBOOK_REQUESTS =
  "post_thong_tin_dang_ki/POST_THONG_TIN_DANG_KI_FACEBOOK_REQUESTS";
export const POST_THONG_TIN_DANG_KI_FACEBOOK_SUCCESS =
  "post_thong_tin_dang_ki/POST_THONG_TIN_DANG_KI_FACEBOOK_SUCCESS";
export const POST_THONG_TIN_DANG_KI_FACEBOOK_FAILED =
  "post_thong_tin_dang_ki/POST_THONG_TIN_DANG_KI_FACEBOOK_FAILED";

/*Action từ component thẳng lên reducer */
