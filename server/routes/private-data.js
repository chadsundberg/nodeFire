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

router.get('/ourdates', function(req, res){
  console.log(req.decodedToken); // Here you can see the information firebase gives you about the user
  res.send("Our Dates!!! You got it!!! Great work " + req.decodedToken.name + "!!!");
});

module.exports = router;
