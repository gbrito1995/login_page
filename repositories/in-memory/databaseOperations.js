const userLogin = require('./database.js');

module.exports = fnLogin = (userName, password) => {

  userLogin.push({ userName: userName, password: password });
  console.table(userLogin)

};