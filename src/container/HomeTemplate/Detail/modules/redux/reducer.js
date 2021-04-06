import {
  FETCH_THONG_TIN_PHIM_FAILED,
  FETCH_THONG_TIN_PHIM_REQUESTS,
  FETCH_THONG_TIN_PHIM_SUCCESS,
} from "./constants";

const initialState = {
  movieDetail: null,
  loading: false,
  err: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_THONG_TIN_PHIM_REQUESTS:
      state.loading = true;
      return { ...state };

    case FETCH_THONG_TIN_PHIM_SUCCESS:
      state.loading = false;
      state.movieDetail = payload;
      return { ...state };

    case FETCH_THONG_TIN_PHIM_FAILED:
      state.loading = false;
      state.err = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
