// objecto en js

// pending
// resolve
// reject

/* new Promise((resolve, reject) => {

}) */

// const myPromise = new Promise((resolve, reject) => {
//   console.log('Pending')
//   setTimeout(() => {
//     resolve('promise resolted')
//   }, 3000)

//   setTimeout(() => {
//     reject(new Error('Promise Rejected'))
//   }, 2000)
// })

// myPromise
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err))

// function delayRandom (delay, number) {
//   return new Promise((resolve, reject) => {
//     const numberExpected = 24

//     setTimeout(() => {
//       if (number > numberExpected) {
//         resolve(number)
//       } else {
//         reject(new Error('Error, nm'))
//       }
//     }, delay)
//   })
// }

// delayRandom(3000, 50)
//   .then((number) => console.log(number))
//   .catch(err => console.error(err))

const fs = require('fs')

// fs.mkdir('directoryTest', (err) => {
//   const response = {
//   }
//   if (err) {
//     response.message = `Error: ${err}`
//     response.status = 505
//     console.log(response)
//   } else {
//     response.message = 'Se creo el directorio'
//     response.status = 200
//     console.log(response)
//   }
// })

function mkdirPrimificada () {
  const response = {
  }
  return new Promise((resolve, reject) => {
    fs.mkdir('directoryTest', (err) => {
      if (err) {
        response.message = `Error ${err}`
        reject(response)
        return
      }
      response.message = 'Done'
      resolve(response)
    })
  })
}

// mkdirPrimificada()
//   .then((res) => {
//     console.log(res)
//     // mas codig
//   })
//   .catch((err) => console.log(err))

async function createYourDictionary () {
  const directoryCreated = await mkdirPrimificada()
  console.log(directoryCreated.message)
}

createYourDictionary()
  .then(() => console.log('Done2'))
  .catch((err) => console.log(err))
