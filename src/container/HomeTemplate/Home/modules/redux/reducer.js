import {
  FETCH_HE_THONG_RAP_REQUESTS,
  FETCH_HE_THONG_RAP_SUCCESS,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_SUCCESS,
} from "./constants";

const initialState = {
  movieList: [],
  loading: false,
  err: null,
  theater: [],
  maHeThong: "BHDStar",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_REQUESTS:
      state.loading = true;
      return { ...state };

    case FETCH_MOVIES_SUCCESS:
      state.loading = false;
      state.movieList = payload;
      return { ...state };

    case FETCH_MOVIES_FAILED:
      state.loading = false;
      state.err = payload;
      return { ...state };

    case FETCH_HE_THONG_RAP_REQUESTS:
      return { ...state };

    case FETCH_HE_THONG_RAP_SUCCESS:
      state.theater = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
