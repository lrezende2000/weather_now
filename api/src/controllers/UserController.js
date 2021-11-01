const express = require("express");

const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { user_id } = req.headers;

    const user = await User.findById(user_id).select('-password')

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    return res.json({
      error: false,
      user,
    })
  } catch (err) {
    return res.status(400).json({
      error: false,
      message: err.message
    })
  }
})

router.put('/', async (req, res) => {
  try {
    const {user_id} = req.headers;

    const doc = req.body;
    delete doc.password;

    const user = await User.findByIdAndUpdate(user_id, doc, {new: true, runValidators:true}).select('-password')

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    return res.json({
      error: false,
      message: 'Usuário alterado com sucesso',
      user
    })
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.message
    })
  }
})

router.delete('/', async (req, res) => {
  try {
    const {user_id} = req.headers;

    await User.findByIdAndDelete(user_id);

    return res.json({
      error: false,
      message: 'Usuário deletado!'
    })
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.message
    })
  }
})

module.exports = router;