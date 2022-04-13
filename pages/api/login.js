import jwt from 'jsonwebtoken'
import serverConfig from 'server/config'

const LoginAPI = (req, res) => {
  if (!req.body) {
    res.statusCode = 404
    res.end('Error')
    return
  }

  const { username, password } = req.body

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === 'admin',
      },
      serverConfig.TOKEN
    ),
  })
}

export default LoginAPI
