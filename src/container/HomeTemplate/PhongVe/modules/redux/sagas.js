import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../../../utils/common/constants";
import { fetchLayDanhSachPhongVeApiAction } from "../services/CheckoutService";
import {
  FETCH_LAY_DANH_SACH_PHONG_VE_FAILED,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
  FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS,
} from "./constants";

function* fetchLayDanhSachPhongVeActionSaga({ payload }) {
  yield put({
    type: FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS,
  });
  try {
    const { data, status } = yield call(
      fetchLayDanhSachPhongVeApiAction,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_LAY_DANH_SACH_PHONG_VE_FAILED,
      payload: err.response.data,
    });
  }
}

export const ChiTietPhongVeSagas = [
  takeLatest(
    FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
    fetchLayDanhSachPhongVeActionSaga
  ),
];
