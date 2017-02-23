const Sequelize = require('sequelize');
const config = require('../config/db');

const db = new Sequelize(config.url);

module.exports = db;
