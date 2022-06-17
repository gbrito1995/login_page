const userLogin = require('./database.js');

module.exports = fnSignUp = (userName, password) => {

  userLogin.push({ userName: userName, password: password });
  console.log(userLogin)

};