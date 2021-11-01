const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const doc = req.body;

    doc.password = bcrypt.hashSync(doc.password, 10);

    const user = await User.create(doc);

    return res.status(201).json({
      error: false,
      message: 'Usuário criado com sucesso!',
      user,
    })
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.message,
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const [user] = await User.find({ email });

    if (!user) {
      throw new Error('Usuário não existe');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error('Senha inválida');
    }

    const token = jwt.sign({id: user._id}, process.env.SECRET);

    return res.json({
      error: false,
      message: 'Login efetuado com sucesso!',
      token
    })
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.message
    });
  }
});

module.exports = router;