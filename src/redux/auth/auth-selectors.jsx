const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
const selectUser = state => state.auth.user;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getToken = state => state.auth.token;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getToken,
  selectUser,
};

export default authSelectors;
