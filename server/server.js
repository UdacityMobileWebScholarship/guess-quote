const env = require("dotenv").config();
if (env.error) {
  throw env.error;
}

const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

// connect to local mongoDB
mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise;

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port);
