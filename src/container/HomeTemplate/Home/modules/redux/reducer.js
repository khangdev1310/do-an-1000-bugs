import {
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_SUCCESS,
} from "./constants";

const initialState = {
  movieList: [],
  loading: false,
  err: null,
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

    default:
      return { ...state };
  }
};
