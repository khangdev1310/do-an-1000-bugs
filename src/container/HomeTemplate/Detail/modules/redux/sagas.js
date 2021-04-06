import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../../../utils/common/constants";
import { fetchMovieDetailApiAction } from "../services/MovieDetailService";
import {
  FETCH_THONG_TIN_PHIM_REQUESTS_SAGA,
  FETCH_THONG_TIN_PHIM_FAILED,
  FETCH_THONG_TIN_PHIM_REQUESTS,
  FETCH_THONG_TIN_PHIM_SUCCESS,
} from "./constants";

function* fetchDetailMovieApiActionSaga({ maPhim }) {
  yield put({
    type: FETCH_THONG_TIN_PHIM_REQUESTS,
  });
  try {
    const test = yield call(fetchMovieDetailApiAction, maPhim);
    console.log(test.response);
    const { data, status } = yield call(fetchMovieDetailApiAction, maPhim);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_THONG_TIN_PHIM_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_THONG_TIN_PHIM_FAILED,
      payload: err.response.data,
    });
  }
}

export const MovieDetailSagas = [
  takeLatest(FETCH_THONG_TIN_PHIM_REQUESTS_SAGA, fetchDetailMovieApiActionSaga),
];
