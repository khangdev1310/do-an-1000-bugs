import {
  AVOID_BOOKED_SEAT,
  BOOKING_SEAT,
  FETCH_LAY_DANH_SACH_PHONG_VE_FAILED,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS,
  FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS,
} from "./constants";

const initialState = {
  infoPhongVe: null,
  isLoading: false,
  err: null,
  bookingSeat: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS:
      state.isLoading = true;
      return { ...state };

    case FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS:
      state.isLoading = false;
      state.infoPhongVe = payload;
      return { ...state };

    case FETCH_LAY_DANH_SACH_PHONG_VE_FAILED:
      state.isLoading = false;
      state.err = payload;
      return { ...state };

    case BOOKING_SEAT:
      const newBookingSeat = [...state.bookingSeat];
      if (payload.daDat) return { ...state };
      const index = newBookingSeat.findIndex((bookedSeat) => {
        return bookedSeat.maGhe === payload.maGhe;
      });
      if (index !== -1) {
        newBookingSeat.splice(index, 1);
      } else {
        newBookingSeat.push(payload);
      }
      state.bookingSeat = newBookingSeat;
      return { ...state };

    default:
      return { ...state };
  }
};
