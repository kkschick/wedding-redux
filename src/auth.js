import { PW } from './config';

module.exports = {
  login(password) {
    if (password === PW) {
      let tokenObj = {
        key: Math.random().toString(36).substring(7),
        timestamp: new Date().getTime()
      };
      localStorage.setItem('token', JSON.stringify(tokenObj));
      return true;
    }
    return false;
  },

  loggedIn() {
    return !!localStorage.token;
  }
}
