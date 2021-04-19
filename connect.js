const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(`no connection`));



//! Offline db******************************************************************************************
// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost/mernsite" , {
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(() => {
//     console.log("Connection Done")
// }).catch((error) => {
//     console.log(error , "Not Connected")
// });
//! bs hume jha DATABASE likhe kyuki for config.env k liye ab hume offline wale m nhi likhna app.js k andar bs..