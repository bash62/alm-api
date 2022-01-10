const router = require("express").Router();
const auth = require('./auth/auth');
const client = require('./unauth/client');

router.use('/auth', auth );
router.use('/client',client);

module.exports = router;