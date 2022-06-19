const userLogin = require('./database.js');

let fnValidateLogin = (login, password) => {

  if (userLogin.login == login && userLogin.password == password) 
    return true;

  return false;

}

module.exports = fnLogin = (login, password) => {

  if (fnValidateLogin(login, password))
    userLogin.push({ login: login, password: password });
  
};