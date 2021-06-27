const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const User = require("./User");
const Comment = require("./Comment");
const db = {};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.DataType = Sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;
