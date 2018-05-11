const Question = require("../models/question");

exports.get = (req, res) => {
  const limit = Number(req.query.limit);

  if (!limit) {
    res.status(400).json({
      error: { message: "limit is not provided" }
    });
    return;
  }

  let options = { limit: limit };
  Question.findRandom({}, {}, options, (err, quotes) => {
    if (err) {
      res.status(500).json({
        error: { message: "Something went wrong" }
      });
      throw err;
    }
    res.send(quotes);
  });
};
