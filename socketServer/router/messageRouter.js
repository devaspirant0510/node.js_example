const express = require('express');
const {Chat} = require("../models");

const router = express.Router();

router.route("/")
    .get(async (req, res) => {
        const chatData = await Chat.findAll({

        })
        res.json(chatData);
    })
    .post((req, res) => {

    })

module.exports = router;
