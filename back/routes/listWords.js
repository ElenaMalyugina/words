var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;


function database(){
  return MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true} );  
}

router.get('/', (req, res, next)=>{
  database()
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