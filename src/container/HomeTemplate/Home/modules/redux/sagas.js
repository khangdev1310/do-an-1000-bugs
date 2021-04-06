import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_HE_THONG_RAP_FAILED,
  FETCH_HE_THONG_RAP_SUCCESS,
  // FETCH_LAY_THONG_TIN_CUM_THONG_RAP_REQUESTS_SAGA,
  FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
  FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_REQUESTS_SAGA,
  FETCH_MOVIES_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_REQUESTS,
  FETCH_THONG_TIN_LICH_CHIEU_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_FAILED,
} from "./constants";
import { STATUS_CODE } from "./../../../../../utils/common/constants";
import {
  fetchLayThongTinHeThongRapApiAction,
  fetchLayThongTinLichChieuHeThongRapApiAction,
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

// function* fetchCumRapApiActionSaga() {
//   console.log(1);
// }

// export function* watchFetchCumRapApiActionSaga() {
//   yield takeLatest(
//     FETCH_LAY_THONG_TIN_CUM_THONG_RAP_REQUESTS_SAGA,
//     fetchCumRapApiActionSaga
//   );
// }

function* fetchLayThongTinLichChieuHeThongRapApiActionSaga({ payload }) {
  yield put({
    type: FETCH_THONG_TIN_LICH_CHIEU_REQUESTS,
  });
  try {
    const { data, status } = yield call(
      fetchLayThongTinLichChieuHeThongRapApiAction,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_THONG_TIN_LICH_CHIEU_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_THONG_TIN_LICH_CHIEU_FAILED,
    });
  }
}

export function* watchFetchLayThongTinLichChieuHeThongRapApiActionSaga() {
  yield takeLatest(
    FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
    fetchLayThongTinLichChieuHeThongRapApiActionSaga
  );
}

export const MovieBigSagas = [
  takeLatest(FETCH_MOVIES_REQUESTS_SAGA, fetchMovieApiActionSaga),
  takeLatest(
    FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
    fetchRapApiActionSaga
  ),
  takeLatest(
    FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
    fetchLayThongTinLichChieuHeThongRapApiActionSaga
  ),
];
