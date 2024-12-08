const cors = require('cors');
const express = require('express');
const banks = require('./app/models/banks')
const account_file = require('./app/models/account_file')
const account = require('./app/models/account')
const category = require('./app/models/category')
const transaction = require('./app/models/transaction')
const users = require('./app/models/users')
// Connect DB
require('./app/db/config')

const app = express();


banks.sync();
account_file.sync();
account.sync();
category.sync();
transaction.sync();
users.sync();


// Routers
// const accountRoute = require('./app/routers/account_route')
// const transactionRouter = require('./app/routers/transaction_route')

// app.use(accountRoute)
// app.use(transactionRouter)
app.use(cors());
app.get('/test', (req, res) => {
      return res.send("test");
});


app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`AccountFlow server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});
