const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
console.log(process.env.id);
app.use(morgan("dev"));
app.set("view engine","html");
nunjucks.configure(path.join(__dirname,"views"),{
    express:app,
    watch:true
});
app.set(express.json());
app.set(express.urlencoded({extended:false}));
