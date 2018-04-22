const _ = require("lodash");

const { User } = require("../models/user");

exports.user_signup = (req, res) => {
  // TODO
  var body = _.pick(req.body, ["email", "password"]);
  var user = new User(body);

  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then(token => {
      res.header("x-auth", token).send(user);
    })
    .catch(e => {
      res.status(400).send((e.msg = "User already exists"));
    });
};

exports.user_login = (req, res) => {
  // TODO
  var body = _.pick(req.body, ["email", "password"]);

  User.findByCredentials(body.email, body.password)
    .then(user => {
      return user.generateAuthToken().then(token => {
        res.header("x-auth", token).send(user);
      });
    })
    .catch(e => {
      res.status(400).send((e, "Incorrect Credentials"));
    });
};
