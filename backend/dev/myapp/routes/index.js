var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/yiyang_db';

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log('连接MongoDB数据库成功');
})

module.exports = router;
