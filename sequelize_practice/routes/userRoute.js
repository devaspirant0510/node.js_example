const express = require("express");
const User = require("../models/User");

const app = express();
const router=  express.Router();


router.route("/")
    .get(async (req, res) => {
        try{
            const data = await User.findAll({});
            res.json(data);
        }catch (e){

        }

    })
    .post(async (req, res) => {
        try{
            const getData = await User.create({
                name:req.body.userName,
                userId:req.body.userId,
                age:req.body.userAge
            });
            res.status(200).json(getData);
        }catch (e){
            console.log(e)

        }

    });

module.exports = router;
