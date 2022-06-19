const data = require('./database.js');

let fnValidateLogin = (pLogin, pPassword) => {

  const user = data.users.find( (user) => {
    return (user.login === pLogin) && (user.password === pPassword);
  } )
  
  return user;
  
}

module.exports = fnLogin = (login, password) => {

  const user = fnValidateLogin(login, password);
  
  if (user)
    data.userLogin.push({ id: user.id, date: new Date().getTime() });

  return user;
  
};