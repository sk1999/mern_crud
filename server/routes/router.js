const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");


// router.get("/",(req, res) => {
//     console.log("connect");
// });

//add user data
router.post("/adduser", async(req,res)=> {
    
    const {userName, name, email} = req.body;

    if(!userName || !name || !email) {
        res.status(404).json("plz fill the data");
    }

    try{

        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(404).json("this user is already present");
        }else{
            const adduser = new users({
                userName, name, email
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch(error) {
        res.status(404).json(error)
    }
});

//get users data

router.get("/getusers",async(req,res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch(error){
        res.status(404).json(error);
    }
})

//get individual user data

router.get("/viewuser/:id",async(req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;
        const user = await users.findById({_id:id});
        
        res.status(201).json(user);
        console.log(user);
    } catch(error){
        res.status(422).json(error);
    }
})

//update user data

router.patch("/edituser/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateuser);
        res.status(201).json(updateuser);
    } catch(error) {
        res.status(422).json(error);
    }
})

module.exports = router;