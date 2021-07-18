const express = require("express");
const path = require("path");

const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.render("chat_room");
    })
    .post((req, res) => {

    });

module.exports = router;
