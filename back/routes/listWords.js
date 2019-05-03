const express = require('express');
const router = express.Router();
const connectDB = require('../helpers/database').connect;

router.get('/', (req, res, next)=>{
  connectDB()
  .then((connect)=>{
    var dbo = connect.db("local");         

      dbo.collection("words").find()
      .toArray((err, resp)=>{
        res.send(JSON.stringify(resp));
        connect.close();
      })   
  })
  .catch((err)=>{
    console.log(err)
  })   

})

module.exports = router;