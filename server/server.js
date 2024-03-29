const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

const server = jsonServer.create()
const users = jsonServer.router('./users.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults())

const SECRET_KEY = '123456789'
const expiresIn = '1d'

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err,
  )
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password,
    ) !== -1
  )
}

function validatorEmailAndPassword({ email, password }) {
  const isEmailValidator = /\S+@\S+\.\S+/.test(email)
  const isPasswordValidator = password.length >= 5

  return (isValidate = isEmailValidator && isPasswordValidator)
}

// Register New User
server.post('/auth/register', (req, res) => {
  const { email, password } = req.body

  if (!validatorEmailAndPassword({ email, password })) {
    const status = 401
    const message =
      'Invalid password or email, minimum password length is 5 letters'
    res.status(status).json({ status, message })
    return
  }

  if (isAuthenticated({ email, password }) === true) {
    const status = 401
    const message = 'Email or Password already exist'
    res.status(status).json({ status, message })
    return
  }

  fs.readFile('./users.json', (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    }

    // Get current users data
    var data = JSON.parse(data.toString())

    // Get the id of last user
    let id = uuidv4()

    //Add new user
    data.users.push({ id, email: email, password: password }) //add some data
    var writeData = fs.writeFile(
      './users.json',
      JSON.stringify(data),
      (err, result) => {
        // WRITE
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({ status, message })
          return
        }
      },
    )
  })

  const message = 'The user is already registered'
  const status = 200

  res.status(status).json({ message, status })
})

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body

  if (!validatorEmailAndPassword({ email, password })) {
    const status = 401
    const message =
      'Invalid password or email, minimum password length is 5 letters'
    res.status(status).json({ status, message })
    return
  }
  if (isAuthenticated({ email, password }) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({ status, message })
    return
  }

  const getUser = userdb.users.filter((user) => {
    return email == user.email
  })

  const user = {
    email: getUser[0].email,
    id: getUser[0].id,
  }

  const token = createToken({ email, password })

  res.status(200).json({ token, user , message: "Welcome to formbuilder" })
})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({ status, message })
    return
  }
  try {
    let verifyTokenResult
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1])

    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token not provided'
      res.status(status).json({ status, message })
      return
    }
    next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({ status, message })
  }
})

server.use(users)

server.listen(8000, () => {
  console.log(`Run Auth API Server PORT 8000`)
})
