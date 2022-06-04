const mongoose = require('mongoose');

const connectionString =
  ''

  const connectDB = (url) => {
    return mongoose.connect(connectionString)
  }

 module.exports = connectDB;
