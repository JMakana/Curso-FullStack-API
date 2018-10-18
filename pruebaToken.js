const jwt = require('jsonwebtoken')
const data = { id: 1 }
const token = jwt.sign(data, 'privatePassword')
console.log(token)
const decoded = jwt.verify(token, 'privatePassword')
console.log(decoded)
