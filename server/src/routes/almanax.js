const express = require("express");
const router = express.Router();

const {
    getToday,
    getByDate,

    
} = require("../controllers/almanax");


router.get("/:plateforme/:lang/today",getToday);
router.get("/:plateforme/:lang/:month/:day",getByDate)
router.get("/:plateforme/:lang/:job",getByDate)

module.exports = router;