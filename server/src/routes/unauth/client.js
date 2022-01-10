const router = require('express').Router();

const FR = require('../../lang/FR_fr.json');

router.get('/lang/:component/:lang', (req,res)  => {
    if(req.params.lang == "FR"){
        res.status(200).send(FR[req.params.component]);
    }
    else {
        res.status(404).send({message: "Not found or not authorized."});
    }
});


module.exports = router;