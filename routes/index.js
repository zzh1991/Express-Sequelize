var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  models.Movie.findAll({
    where: {
      movieType: 'RECENT',
    }
  }).then(function(movies) {
    res.send(movies);
  });
});

module.exports = router;
