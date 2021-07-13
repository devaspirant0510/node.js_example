const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("라우터로 코드 분리시키기");
});


module.exports = router;