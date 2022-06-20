var express = require('express');
var router = express.Router();
const md5 = require('md5-nodejs');
const fnLogin = require('../repositories/in-memory/databaseOperations.js')
/* GET index page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {

  const { login, password } = req.body;
  const hashPassword = md5(password);

  if (fnLogin(login, hashPassword)) {
    res.render('home', { login: login });
  } else {
    res.render('index', { error: "incorrect login or password!" });
  }

});

module.exports = router;
