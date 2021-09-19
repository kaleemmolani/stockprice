require('dotenv').config();
const express = require('express');
var axios = require("axios").default;
const {options} = require('./utils/stockprice');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/stock', (req, res) => {
  try {
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  } catch (error) {
    res.send(error);
  }
});
app.listen(process.env.PORT,()=>console.log(`server is started at ${process.env.PORT}`))