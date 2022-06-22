var express = require('express');
var router = express.Router();
const md5 = require('md5-nodejs');
const fnLogin = require('../repositories/in-memory/databaseOperations.js')

router.get('/', (req, res) => {
  console.log('ok')
});

router.post('/', (req, res) => {

  const { login, password } = req.body;
  const hashPassword = md5(password);

  if (fnLogin(login, hashPassword)) {
    res.render('home', { login: login });
  } else {
    res.redirect('/');
  }

});
module.exports = router;