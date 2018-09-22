const getters = {
  access_token: state => state.user.access_token,
  refresh_token: state => state.user.refresh_token,
  roles: state => state.user.roles,
  errLog: state => state.errLog.errLog
};
export default getters
