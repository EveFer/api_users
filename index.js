const app = require('./src/server')
require('dotenv').config()
const db = require('./src/lib/db')

async function start () {
  await db.connect()
  console.log('Connected to database')
  app.listen(3001, () => {
    console.log('Server listening on 3001')
  })
}

start()
  .then(() => console.log('All done!'))
  .catch(err => console.log(err))
