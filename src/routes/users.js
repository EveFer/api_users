const { Router } = require('express')
const usersCases = require('../usesCases/users')

const ROUTER = Router()

// uri parameter
ROUTER.post('/', async (req, res) => {
  try {
    const { body } = req
    const userCreated = await usersCases.create(body)
    res.json({
      success: true,
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      data: {
        message: error.message
      }
    })
  }
})

module.exports = ROUTER
