var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('orderdetail_update_no');
});

//匯出
module.exports = router;