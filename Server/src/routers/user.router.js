const express = require('express')
const router = express.Router()

const {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
  updateUserHandler,
} = require('../controllers/user.controller')

const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('../schemas/user.schema')

const {
  validateResource,
} = require('../middlewares/validateResource.middleware')

router.post('/', validateResource(createUserSchema), createUserHandler)

router.get('/', getUsersHandler)

router.get('/:id', validateResource(getUserSchema), getUserHandler)

router.patch('/:id', validateResource(updateUserSchema), updateUserHandler)

module.exports = router
