const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Models = require('../models');
const SALT_WORK_FACTOR = 10;

// Method that is going to check the credentials against our database.
function validate(req, res, next) {
  Models.User.findOne({
    where: {
      // We are queryin just the e-mail, then if it returns, we
      // are going to check the stored password.
      email: req.body.email,
    },
  }).then((user) => {
    // General error to be returned. Not the best approach.
    const err = new Error('Invalida data');
    err.status = 500;
    if (!user) {
      next(err);
    } else {
      const passwordMatch = bcrypt.compareSync(req.body.password, user.password);
      if (passwordMatch) {
        // We could check the user password in the database. Let's return it!
        return res.status(200).json(user);
      } else {
        next(err);
      }
    }
  }).catch((err) => {
    next(err);
  })
}

function signUp(req, res, next) {
  Models.User.findOne({
    where: {
      // Check if the user we are trying to create already exists.
      email: req.body.email,
    },
  }).then((user) => {
    // Everything is fine, let's create the user.
    const err = new Error('Impossible to create the user');
    err.status = 500;
    if (!user) {
      // Bcrypting password before store.
      const password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_WORK_FACTOR));
      Models.User.create({
        email: req.body.email,
        password: password
      }).then((user) => {
        return res.status(200).json(user);
      }).catch((err) => {
        next(err);
      })
    } else {
      next(err);
    }
  });
}

module.exports = {
  validate,
  signUp,
};
