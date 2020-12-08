require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/notes-app'
};