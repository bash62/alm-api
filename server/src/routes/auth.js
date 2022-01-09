const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord'));

router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/',
    successRedirect: '/api/auth/user',
}));

router.get('/user', (req,res)=>{
    if(req.user){
        res.send(req.user);
    } else{
        res.status(401).send({msg: "Unauthorized"});
    }
})

module.exports = router;