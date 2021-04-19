const mongoose = require("mongoose");


const mernSite = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
      type: String,
      required: true,
  }
});


//*****************************************************************
const Mernsite = mongoose.model("MERNSITE", mernSite);
module.exports = Mernsite;

//!ye part hume app.js m likhna hai const Mernsite = require krke
