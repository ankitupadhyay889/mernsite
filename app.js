const express = require("express");
const dotenv = require("dotenv");
const app = express();

const port = process.env.PORT || 5000;

//******************************************************************
//! Data upload by postman in contact
const Mernsite = require("./fillbyUser");

//******************************************************************
//! Privacy
dotenv.config({ path: "./config.env" });

//******************************************************************
//! DB Connections
require("./connect");
app.use(express.json());

app.get("/about", (req, res) => {
  res.send("Hello");
});

app.get("/work", (req, res) => {
  res.send("Hello");
});

app.get("/contact", (req, res) => {
  res.send("Hello");
});


//! *********************************************************************************************************** 
app.post("/contact", async(req, res) => {
    //! ye jo hai postman ki help se data register ho rha hai
    // res.json({message : req.body});

    //! ye jo hai postman ki help se mere online db m save ho rha hai

    const { name , work , email , phone } = req.body;
    if(!name||!work||!email||!phone){
        return res.status(422).json({error: "Please check and fill data properly"})
    }

    try {
        const userHai = await Mernsite.findOne({ email : email});
        if(userHai){
            return res.status(422).json({error : "Email already exist"});
        }

        const newUser = new Mernsite({name , work , email , phone});
        const doneUser = await newUser.save();

        if(doneUser){
            res.status(201).json({message : "Data is save in online db"})
        }else{
            res.status(500).json({error : "Failed to save data in db"});
        }
    } catch (error) {
        console.log(error);
    }

});

//! *********************************************************************************************************** 


//! *******************************HEROKU DEPLOY OF MY MERN PROJECT********************************************

if(process.env.NODE_ENV == "production"){
  app.use(express.static("Client/build"))
}

//! ************************************************************************************************************


app.listen(port, () => {
  console.log(`Server is run on ${port}`);
});
