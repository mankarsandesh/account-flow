const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

// Connect DB
require('./app/db/config')

const app = express();

// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST_IP,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
// });

app.use(cors());

// Routers
const userRouter = require('./app/routers/user_route')

app.use(userRouter)

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`AccountFlow server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

// app.get('/test', (req, res) => {
//   const { table } = req.query;
//   sequelize.query(`select * from sample`, (err, results) => {
//     if (err) {
//       console.log('error')
//       return res.send(err);
//     } else {
//       console.log('oke');
//       return res.send(results);
//     }
//   });
// });