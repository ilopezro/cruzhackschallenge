const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(express.static('./public'))
app.use(morgan('short'))

app.use(bodyParser.urlencoded({extended: false}))

const user = require('./routes/user.js')
app.use(user); 
const index = require('./routes/index.js')
app.use(index); 

app.get('/', function(req, res) {
  res.contentType('application/json')
  res.type('application/json')
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


const PORT = process.env.PORT || 3001

//localhost:3000
app.listen(PORT, () =>{
  console.log("app is listening on port " + PORT);
});