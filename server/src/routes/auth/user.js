const router = require('express').Router()
const update = require('../update');


router.get('/', (req,res)=>{
    
    if(req.user){
        res.send(req.user);
    } else{
        res.status(401).send({msg: "Unauthorized"});
    }
})

router.use('/update', update);


module.exports = router;