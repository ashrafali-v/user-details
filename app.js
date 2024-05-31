const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");



const app = express();

dotenv.config();
app.use(bodyParser.json());

app.use(express.json());
app.use('/users', userRoutes);

async function start() {
  console.log(process.env.DB_CONNECT);
  try {
    mongoose.connect(
      process.env.DB_CONNECT,
      { useNewUrlParser: true },
    );
    const port = process.env.PORT || 3023;
    app.listen(port, function (err) {
      if (err) console.log("Error in server setup");
      console.log("Server is Up and running");
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}
start();
