const fs = require('fs');
const Question = require("./api/models/question");
const mongoose = require("mongoose");
const env = require("dotenv").config();
if (env.error) {
  throw env.error;
}

// use global promise
mongoose.Promise = global.Promise;

// connect to local mongoDB
mongoose.connect(process.env.DB_URL);

// delete all old entries from database
Question.remove()
    .then(() => {
        console.log('Removed old entries from database...');
        initDB();
    })
    .catch((err) => {
        throw err;
    });

function initDB() {
    fs.readFile('seed/quotes.json', (err, data) => {
    
        // read the quotes from file
        let quote = JSON.parse(data);
     
        Question.insertMany(quote.questions, (error, docs) => {
            console.log('Database initiated...');

            // after database initiated close the mongoDB connection
            mongoose.disconnect();
        });
    });
}