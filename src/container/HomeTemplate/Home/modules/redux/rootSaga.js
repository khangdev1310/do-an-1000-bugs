import { all } from "@redux-saga/core/effects";
import {
  watchFetchMovieApiActionSaga,
  watchFetchRapApiActionSaga,
  watchFetchCumRapApiActionSaga,
} from "./sagas";

export function* rootSaga() {
  yield all([
    watchFetchMovieApiActionSaga(),
    watchFetchRapApiActionSaga(),
    watchFetchCumRapApiActionSaga(),
  ]);
}
