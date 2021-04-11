import {
  FETCH_LAY_DANH_SACH_PHONG_VE_FAILED,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS,
  FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS,
} from "./constants";

const initialState = {
  infoPhongVe: null,
  isLoading: false,
  err: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS:
      state.isLoading = true;
      return { ...state };

    case FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS:
      state.isLoading = false;
      state.infoPhongVe = payload;
      return { ...state };

    case FETCH_LAY_DANH_SACH_PHONG_VE_FAILED:
      state.isLoading = false;
      state.err = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
