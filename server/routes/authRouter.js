const { Router } = require('express')
const auth = require('../controllers/auth')
const authController = require('../controllers/auth')

const router = Router()

router.route('/signup')
  .post(authController.postSignup)

router.route('/signin')
  .post(authController.postSignin)

router.route('/signout')
  .get(authController.getSignout)

module.exports = router
