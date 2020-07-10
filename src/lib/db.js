const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

function connect () {
  return mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}

// connect()
//   .then(() => {
//     console.log('DB connected')
//   })
//   .catch(err => console.log(err))

module.exports = {
  connect
}
