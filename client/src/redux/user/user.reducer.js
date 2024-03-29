import UserActionTypes from "./user.types";

const initState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGIN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGIN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
