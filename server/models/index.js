const Sequelize = require('sequelize');
const db = require('./db');

const User = require('./user');
const Quiz = require('./quiz');
const Question = require('./question');
const Answer = require('./answer');
const Response = require('./response');
const Result = require('./result');

Quiz.hasMany(Question);
Question.belongsTo(Quiz);
Question.hasMany(Answer);
Answer.belongsTo(Question);

Quiz.hasMany(Response);
Response.belongsTo(Quiz);
Response.hasMany(Result);
Result.belongsTo(Response);
Result.belongsTo(Question);
Result.belongsTo(Answer);

db.sync();

module.exports = {
  User,
  Quiz,
  Question,
  Answer,
};
