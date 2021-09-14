const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
const auth = require('./modules/auth') // 引用fb模組

const { authenticator } = require('../middleware/auth')


router.use('/todos', authenticator, todos) // 加入驗證程序
router.use('/users', users)
router.use('/auth', auth) // 掛載fb模組
router.use('/', authenticator, home) // 加入驗證程序

module.exports = router
