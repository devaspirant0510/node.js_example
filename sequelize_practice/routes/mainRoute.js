const express = require("express");
const User = require("../models/User");

const app = express();
const router = express.Router();

router.get("/",async (req, res) => {
    try{
       const findData = await User.findAll({});
        res.render("index",{userData:findData});
    }catch (e){
        console.log(e);
    }
});

module.exports = router;



