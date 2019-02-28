import express from 'express';
import models from '../models';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  models.Movie.findAll({
    where: {
      movieType: 'RECENT',
    }
  }).then(movies => {
    res.send(movies);
  });
});

module.exports = router;
