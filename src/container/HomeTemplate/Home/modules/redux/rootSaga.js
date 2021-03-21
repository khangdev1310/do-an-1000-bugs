import { all } from "@redux-saga/core/effects";
import { watchFetchMovieApiAction } from "./sagas";

export function* rootSaga() {
  yield all([watchFetchMovieApiAction()]);
}
