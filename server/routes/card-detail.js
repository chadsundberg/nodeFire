var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 5000
};
var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  console.log('hit my get place id route');
  var placeId = req.query.placeId;
  console.log('placeId: ', placeId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      // SELECT * FROM task;
      client.query('SELECT * FROM ourdates WHERE id=$1',
      [placeId],
      function(err, result) {
        done(); // close the connection db

        if(err){
          console.log(err);
          res.sendStatus(500); // the world exploded
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

router.post('/', function (req, res) {
  var newReview = req.body;
  console.log('New Review: ', newReview);
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO reviews (visit_description, visit_date, visit_rating, date_id) VALUES ($1, $2, $3, $4)',
        [newReview.visit_description, newReview.visit_date, newReview.visit_rating, newReview.id])
        .then(function (result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });
    });
});

router.get('/reviews', function(req, res) {
  console.log('hit my get place id route');
  var placeId = req.query.placeId;
  console.log('placeId: ', placeId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      // SELECT * FROM task;
      client.query('SELECT * FROM ourdates JOIN reviews ON reviews.date_id=ourdates.id WHERE ourdates.id=$1 ORDER BY visit_date DESC',
      [placeId],

      function(err, result) {
        done(); // close the connection db

        if(err){
          console.log(err);
          res.sendStatus(500); // the world exploded
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

module.exports = router;
