import {
  POST_THONG_TIN_DANG_NHAP_FAILED,
  POST_THONG_TIN_DANG_NHAP_REQUESTS,
  POST_THONG_TIN_DANG_NHAP_SUCCESS,
} from "./constants";

const initialState = {
  thongTinUser: null,
  thongTinDangKi: null,
  err: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_THONG_TIN_DANG_NHAP_REQUESTS:
      state.isLoading = true;
      return { ...state };

    case POST_THONG_TIN_DANG_NHAP_SUCCESS:
      state.isLoading = false;
      return { ...state };

    case POST_THONG_TIN_DANG_NHAP_FAILED:
      state.isLoading = false;
      state.err = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
