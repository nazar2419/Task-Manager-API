const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://nazar:111222333@nodeexspressprojects.mi4oc.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

  const connectDB = (url) => {
    return mongoose.connect(connectionString)
  }

 module.exports = connectDB;