 

//------------------------
//    VARs
//-----------------------
const bodyParser = require('body-parser');  // serve per la post (è suplerfluo??)
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = new express();
const helmet = require('helmet');
const cors = require('cors');
const corsWhitelist = ['http://localhost']
const corsOptions = { origin: corsWhitelist };

//------------------------
//    MIDDLEWARE
//-----------------------

//------------------------
//    MAIN
//-----------------------
app.listen(PORT, function () {
  console.log(`Server app listening on port ${PORT}!`);
});
