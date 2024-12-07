const cors = require('cors');
const express = require('express');
// const accountType = require('./app/models/account_type')
// Connect DB
require('./app/db/config')

const app = express();


// accountType.sync();


// Routers
const userRouter = require('./app/routers/user_route')
// const transactionRouter = require('./app/routers/transaction_route')

app.use(userRouter)
// app.use(transactionRouter)
app.use(cors());
app.get('/test', (req, res) => {
      return res.send("test");
});


app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`AccountFlow server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});
