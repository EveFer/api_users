const User = require('../models/users')

/**
 *
 * @param {*} newUserData
 */
function create (newUserData) {
  return User.create(newUserData)
}

module.exports = {
  create
}
