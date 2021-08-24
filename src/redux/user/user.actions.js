export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

// export const setCurrentUser = (user) => async (dispatch) => {
//   console.log(user);
//   dispatch({
//     type: "SET_CURRENT_USER",
//     payload: user,
//   });
// };
