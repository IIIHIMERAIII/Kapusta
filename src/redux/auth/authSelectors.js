export const getUserName = state => state.auth.user.name;
export const getUser = state => state.auth.user;
export const getLoadingStatus = state => state.auth.isLoading;
export const getLogStatus = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;

// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectUser =
// export const selectIsRefreshing = state => state.auth.isRefreshing;
