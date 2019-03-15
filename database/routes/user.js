const express = require('express')
const mysql = require('mysql')
const router = express.Router(); 

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', 
    user: 'root', 
    password: 'password',
    database: 'sampledb'
}) 

function getConnection(){
    return pool
} 

router.get("/hackers", (req, res) => {
  res.contentType('application/json');
  const queryString = "select * from hackers";
  getConnection().query(queryString, (err, rows, fields) =>{
    if (err){
      console.log("failed to query users"); 
      res.sendStatus(500)
      return
    }
    res.send(JSON.stringify(rows))
  }); 
})

router.get("/checkedInHackers", (req,res) =>{
  res.contentType('application/json')
  const queryString = "select count(isCheckedIn) as checkedInCount FROM hackers where isCheckedIn = 1;"
  getConnection().query(queryString, (err, rows, fields) =>{
    if (err){
      console.log("failed to count the total checked in users"); 
      res.sendStatus(500)
      return
    }
    console.log(rows)
    res.send(JSON.stringify(rows))
  }) 
})

router.get('/totalHackers', (req, res) => {
  res.contentType('application/json');
  const queryString = "select count(unique_id) as totalHackers from hackers;"
  getConnection().query(queryString, (err, rows, fields) =>{
    if (err){
      console.log("failed to count the total users"); 
      res.sendStatus(500)
      return
    }
    console.log(rows)
    res.send(JSON.stringify(rows))
  })
})

router.get("/hackers/:id", (req, res) => {
  res.type('application/json');
  console.log("requesting data from: " + req.params.id)
  const userId = req.params.id; 
  const queryString = "SELECT * FROM hackers WHERE unique_id = ?"; 
  getConnection().query(queryString, [userId], (err, rows, fields) =>{
    if (err){
      console.log("failed to query user with id: ", userId); 
      res.sendStatus(500)
      return
    }
    console.log("we fetched user succesfully");
    res.send(JSON.stringify(rows))
  }); 
})

function checkIn(studentID, req, res){
  const queryString = "update hackers set isCheckedIn = 1 where student_id = ?"
  getConnection().query(queryString, [studentID], (err, rows, fields) =>{
    if(err){
      console.log("failed to check in user: " + err)
      res.sendStatus(500)
      return 
    }
    if(rows.changedRows == 0){
      console.log("failed to check user in. user is already signed in")
      res.send("failed to check user in. user is already signed in"); 
    }else{
      res.send("User checked in!"); 
      console.log("checked user in")
    }
  })
}

router.post('/checkUserIn', (req, res) =>{
  res.type('application/json');
  console.log("requesting to check user: " + req.body.studentID + " in")
  const studentID = req.body.studentID; 
  const firstName = req.body.firstName; 
  const lastName = req.body.lastName; 

  const queryString = "select * from hackers where student_id = ?"
  getConnection().query(queryString, [studentID], (err, rows, fields) =>{
    if(err){
      console.log("failed to check in user: " + err)
      res.sendStatus(500)
      return 
    }
    if(rows.length != 0){
      checkIn(studentID, req, res)
    }else{
      console.log("unknown user")
      res.send("unable to check hacker in. please check to see if you entered correct info"); 
    }
  })
  // res.redirect(200,'/CheckIn')
})


router.post("/signUpUser", (req, res) =>{
  res.type('application/json');
    console.log("Trying to create new user")
    console.log("first name: " + req.body.firstName)
    console.log("last name: " + req.body.lastName)
    console.log("diet rest: " + req.body.physSelect)
    
  
    const firstName = req.body.firstName; 
    const lastName = req.body.lastName; 
    const studentID = req.body.studentID; 
    const email = req.body.email; 
    var dietRest = req.body.dietSelect; 
    const dietRestTxt = req.body.dietDescription; 
    var physRest = req.body.physSelect;
    const physRestTxt = req.body.physDescription;  
    if(dietRest == 'yes' && physRest == 'yes'){
      dietRest = 1;
      physRest = 1; 
      const queryString = "insert into hackers (student_id, first_name, last_name, email, dietRest, dietRestTxt, physDis, physDisTxt, isCheckedIn) values (?,?,?,?,?,?,?,?,?)"
      getConnection().query(queryString, [studentID, firstName, lastName, email, dietRest, dietRestTxt, physRest, physRestTxt, 0], (err, results, fields) =>{
        if(err){
          console.log("Cannot insert user into database " + err)
          res.sendStatus(500); 
          return
        }
        console.log("succesfully added user into database. id: ", results.insertId)
        res.end(); 
      }); 
    }else if(dietRest == 'yes' && physRest=='no'){
      dietRest = 1;
      physRest = 0; 
      const queryString = "insert into hackers (student_id, first_name, last_name, email, dietRest, dietRestTxt, physDis, isCheckedIn) values (?,?,?,?,?,?,?,?)"
      getConnection().query(queryString, [studentID, firstName, lastName, email, dietRest, dietRestTxt, physRest,0], (err, results, fields) =>{
        if(err){
          console.log("Cannot insert user into database " + err)
          res.sendStatus(500); 
          return
        }
        console.log("succesfully added user into database. id: ", results.insertId)
        res.end(); 
      }); 
    }else if(dietRest == 'no' && physRest == 'yes'){
      dietRest = 0;
      physRest = 1; 
      const queryString = "insert into hackers (student_id, first_name, last_name, email, dietRest, physDis, physDisTxt, isCheckedIn) values (?,?,?,?,?,?,?,?)"
      getConnection().query(queryString, [studentID, firstName, lastName, email, dietRest, physRest, physRestTxt,0], (err, results, fields) =>{
        if(err){
          console.log("Cannot insert user into database " + err)
          res.sendStatus(500); 
          return
        }
        console.log("succesfully added user into database. id: ", results.insertId)
        res.end(); 
      }); 
    }else{
      dietRest = 0;
      physRest = 0; 
      const queryString = "insert into hackers (student_id, first_name, last_name, email, dietRest, physDis, isCheckedIn) values (?,?,?,?,?,?,?)"
      getConnection().query(queryString, [studentID, firstName, lastName, email, dietRest, physRest,0], (err, results, fields) =>{
        if(err){
          console.log("Cannot insert user into database " + err)
          res.sendStatus(500); 
          return
        }
        console.log("succesfully added user into database. id: ", results.insertId)
        res.end(); 
      }); 
    }
    res.redirect(200, '/')
})


module.exports = router; 