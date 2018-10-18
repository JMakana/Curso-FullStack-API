const User = require('../models/User')

/* const create = (req, res) => {
  // recogemos los datos del body que nos interesen:
  const { email, password } = req.body
  const user = new User({ email, password })
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        message: 'Error al guardar el usuario',
        error: err
      })
    }
    return res.status(201).json(user)
  })
} */

const create = (req, res) => {
  // recogemos los datos del body que nos interesen:
  const { email, password } = req.body
  const user = new User({ email, password })
  const promiseSaveUser = user.save()
  promiseSaveUser
    .then(usuario => {
      user.generateAuthToken().then(token => {
        res
          .header('x-auth', token)
          .status(201)
          .send(usuario)
      })
    })
    .catch(err => {
      res.status(400).send({ error: err })
    })
}

module.exports = { create }
