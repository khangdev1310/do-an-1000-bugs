import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_HE_THONG_RAP_FAILED,
  FETCH_HE_THONG_RAP_SUCCESS,
  FETCH_LAY_THONG_TIN_CUM_THONG_RAP_REQUESTS_SAGA,
  FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_REQUESTS_SAGA,
  FETCH_MOVIES_SUCCESS,
} from "./constants";
import { STATUS_CODE } from "./../../../../../utils/common/constants";
import {
  fetchLayThongTinHeThongRapApiAction,
  fetchMovieApiAction,
} from "../services/MovieListServices";

function* fetchMovieApiActionSaga() {
  yield put({
    type: FETCH_MOVIES_REQUESTS,
  });
  try {
    const { data, status } = yield call(fetchMovieApiAction);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_MOVIES_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_MOVIES_FAILED,
      payload: err,
    });
  }
}

export function* watchFetchMovieApiActionSaga() {
  yield takeLatest(FETCH_MOVIES_REQUESTS_SAGA, fetchMovieApiActionSaga);
}

function* fetchRapApiActionSaga() {
  yield put({
    type: FETCH_MOVIES_REQUESTS,
  });
  try {
    const { data, status } = yield call(fetchLayThongTinHeThongRapApiAction);
    console.log(data);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_HE_THONG_RAP_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_HE_THONG_RAP_FAILED,
    });
  }
}

export function* watchFetchRapApiActionSaga() {
  yield takeLatest(
    FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
    fetchRapApiActionSaga
  );
}

function* fetchCumRapApiActionSaga() {
  console.log(1);
}

export function* watchFetchCumRapApiActionSaga() {
  yield takeLatest(
    FETCH_LAY_THONG_TIN_CUM_THONG_RAP_REQUESTS_SAGA,
    fetchCumRapApiActionSaga
  );
}
