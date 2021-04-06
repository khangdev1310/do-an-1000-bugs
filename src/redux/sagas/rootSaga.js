import { all, fork } from "@redux-saga/core/effects";
import { MovieDetailSagas } from "../../container/HomeTemplate/Detail/modules/redux/sagas";
import { MovieBigSagas } from "../../container/HomeTemplate/Home/modules/redux/sagas";

export default function* rootSaga() {
  yield all([...MovieBigSagas, ...MovieDetailSagas]);
}
