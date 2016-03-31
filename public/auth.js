module.exports = {
  login(password) {
    if (password === 'maggie') {
      localStorage.setItem('token', Math.random().toString(36).substring(7));
      return true;
    }
    return false;
  },

  loggedIn() {
    return !!localStorage.token;
  }
}
