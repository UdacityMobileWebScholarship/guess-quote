const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();


const routes = require('./api/routes/')


// connect to local mongoDB
mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes

app.use('/', routes)

// error handling
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;
