'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'..', 'config', 'config.json'))[env];
const db = {};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const User = require("./User")(sequelize,Sequelize);
const Chat = require("./Chat")(sequelize,Sequelize);

// User.hasMany(Chat,{foreignKey:"userId",sourceKey:"id"});
// Chat.belongsTo(User,{foreignKey:"userId",sourceKey:"id"});
//
db.User = User;
db.Chat = Chat;


module.exports = db;
