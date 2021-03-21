import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_REQUESTS_SAGA,
  FETCH_MOVIES_SUCCESS,
} from "./constants";
import { STATUS_CODE } from "./../../../../../utils/common/constants";
import { fetchMovieApiAction } from "../services/MovieListServices";

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

export function* watchFetchMovieApiAction() {
  yield takeLatest(FETCH_MOVIES_REQUESTS_SAGA, fetchMovieApiActionSaga);
}
