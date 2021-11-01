const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error('Token é obrigatório')
    }
    //Bearer askdhfasdkf
    const [bearer, token] = req.headers.authorization.split(' ')
    const { id } = jwt.verify(token, process.env.SECRET)

    req.headers.user_id = id;

    next()
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.message,
    });
  }
}