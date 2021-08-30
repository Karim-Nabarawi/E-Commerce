import UserActionTypes from "./user.types";

const initState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      // case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
