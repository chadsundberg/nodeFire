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

module.exports = router;
