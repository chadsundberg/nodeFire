var router = require('express').Router();
var pg = require('pg');
// const swal = require('sweetalert2');

// var config = {
//   database: 'phi',
//   host: 'localhost',
//   port: 5432,
//   max: 10,
//   idleTimeoutMillis: 5000
// };
// var pool = new pg.Pool(config);

router.get('/', function(req, res){
  console.log(req.decodedToken); // Here you can see the information firebase gives you about the user
  res.send("Our Dates!!! You got it!!! Great work " + req.decodedToken.name + "!!!");
});

// router.get('/ourdates', function(req, res) {
//   console.log('hit my get all dates route');
//   pool.connect(function(err, client, done) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//       // SELECT * FROM task;
//       client.query('SELECT * FROM ourdates ORDER BY status desc;', function(err, result) {
//         done(); // close the connection db
//
//         if(err){
//           console.log(err);
//           res.sendStatus(500); // the world exploded
//         }else{
//           console.log(result.rows);
//           res.status(200).send(result.rows);
//         }
//       });
//     }
//   });
// });

module.exports = router;
