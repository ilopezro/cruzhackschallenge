const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

app.use(cors())

app.use(express.static('./public'))
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(morgan('short'))

app.use(bodyParser.urlencoded({extended: false}))

const user = require('./routes/user.js')
app.use(user); 
const index = require('./routes/index.js')
app.use(index); 

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001

//localhost:3000
app.listen(PORT, () =>{
  console.log("app is listening on port " + PORT);
});