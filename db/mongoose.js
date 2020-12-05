const mongoose = require('mongoose');
const { database } = require('../config');

// db connect
mongoose.connect(database, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
