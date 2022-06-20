var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
  console.log('ok')
});
module.exports = router;