/* const express = require('express')
  , router = express.Router() */

const router = require('express-promise-router')()
const { validateBody } = require('../helpers/routeHelpers')


import { AuthController } from './../controllers/authController'
import { UserController } from './../controllers/userController'

/*
  Validators Schemas
*/
const { userCreateSchema, userUpdateSchema  } = require('../validators/user')


router.route('/test').get( AuthController.signin )

router.route('/user').get( UserController.index )

router.route('/user').post( validateBody( userCreateSchema ), UserController.create )

module.exports = router
