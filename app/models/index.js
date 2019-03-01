'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const database = process.env.DATABASE || config.database;
const username = process.env.USERNAME || config.username;
const password = process.env.PASSWORD || config.password;
const host = process.env.HOST || config.host;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: config.dialect,
  define: {
    freezeTableName: true,
    underscored: true,
    timestamps: false
  }
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
