import {
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  BOOKING_FAILURE
} from "../actions/types";
import initialState from "./initialState";

export default function(state = initialState.booking, action) {
  switch (action.type) {
    case BOOKING_REQUEST:
      return {
        ...state,
        status: "loading",
        loading: true
      };

    case BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        message: `Unable to add booking`,
        errors: action.payload.data,
        status: action.payload.status
      };

    case BOOKING_SUCCESS:
      return {
        ...state,
        //
        loading: false,
        status: action.payload.status,
        message: action.payload.message
      };

    default:
      return state;
  }
}
