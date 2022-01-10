const router = require("express").Router();
const auth = require('./auth/auth');
const client = require('./unauth/client');
const user = require('./auth/user');

router.use('/auth', auth );
router.use('/client',client);
router.use('/user',user)

module.exports = router;