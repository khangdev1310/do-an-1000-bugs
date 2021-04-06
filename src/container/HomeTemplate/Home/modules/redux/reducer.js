import { SEND_MOVIE_DETAIL } from "../../../../../components/MovieItem/modules/constants";
import {
  CHANGE_MA_HE_THONG,
  FETCH_HE_THONG_RAP_REQUESTS,
  FETCH_HE_THONG_RAP_SUCCESS,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_SUCCESS,
} from "./constants";

const initialState = {
  movieList: [],
  loading: false,
  err: null,
  theater: [],
  cumRap: [],
  maHeThongRap: "BHDStar",
  isModal: false,
  movieDetail: null,
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
      state.loading = true;
      return { ...state };

    case FETCH_HE_THONG_RAP_SUCCESS:
      state.loading = false;
      state.theater = payload;
      return { ...state };

    case CHANGE_MA_HE_THONG:
      state.maHeThongRap = payload;
      return { ...state };

    case FETCH_THONG_TIN_LICH_CHIEU_SUCCESS:
      state.cumRap = payload;
      return { ...state };

    case "CHANGE_MODAL_OPEN":
      state.isModal = !state.isModal;
      return { ...state };

    case SEND_MOVIE_DETAIL:
      state.movieDetail = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
