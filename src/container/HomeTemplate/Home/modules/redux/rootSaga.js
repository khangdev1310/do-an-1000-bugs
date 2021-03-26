import { all } from "@redux-saga/core/effects";
import {
  watchFetchMovieApiActionSaga,
  watchFetchRapApiActionSaga,
  // watchFetchCumRapApiActionSaga,
  watchFetchLayThongTinLichChieuHeThongRapApiActionSaga,
} from "./sagas";

export function* rootSaga() {
  yield all([
    watchFetchMovieApiActionSaga(),
    watchFetchRapApiActionSaga(),
    // watchFetchCumRapApiActionSaga(),
    watchFetchLayThongTinLichChieuHeThongRapApiActionSaga(),
  ]);
}
