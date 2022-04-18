const {Sequelize} = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User')

const connetions = new Sequelize(dbConfig)

User.init(connetions)

module.exports = connetions



// Sem o Sequelize
// const mysql = require('mysql');

// const connect = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'appmessage'
// });

// module.exports = connect;
  