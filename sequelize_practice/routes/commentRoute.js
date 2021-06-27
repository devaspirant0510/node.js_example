const express = require("express");
const Comment = require("../models/Comment");

const app = express();
const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{

            console.log(req.body)
            const data =await Comment.create({
                comment:req.body.comment,
                commenterId:Number(req.body.commenterid)
            });
            res.status(200).json(data);
        }catch (e){
            console.log(e);
        }
    });
router.route("/:id")
    .get(async (req, res) => {
        try{
            const getData = await Comment.findAll(
                {where:{
                        commenterid:req.params.id
                    }});
            res.status(200).json(getData);
        }catch (e){
            console.log(e);
        }
    })
    .delete(async (req,res)=>{
        try{
            console.log(req.params.id)
            const getData = await Comment.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.status(200).json(getData);


        }catch (e){

        }
    })
module.exports = router;
