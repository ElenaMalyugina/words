var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


function database(){
  return MongoClient.connect('mongodb://127.0.0.1:27017');  
}

router.get('/', (req, res, next)=>{

  let cardId=req.query.id;

  database()
  .then((connect)=>{
    var dbo = connect.db("local");
    
    dbo.collection("words").findOne({}, (err, r)=>{
      res.send(
        JSON.stringify(r)
      )
    })
    connect.close()
  })
  .catch((err)=>{
    console.log(err)
  })   
});

router.post('/', (req, res, next)=>{
  console.log(req.body);
  database()
  .then((connect)=>{
    var dbo = connect.db("local");
    dbo.collection("words").insertOne(req.body, (err, r)=>{
      res.send("Вставлено")      
    })
    connect.close();
  })
  .catch((err)=>{
    console.log(err)
  })   
})

router.put('/', (req, res, next)=>{
  database()
  .then((connect)=>{
    var dbo = connect.db("local");
    var myquery = { id: req.body.id};
    var newvalues = {englishWord: req.body.englishWord, russianWord: req.body.russianWord};

    console.log(newvalues)

    dbo.collection("words").updateOne(myquery, {$set:newvalues}, (err, r)=>{
      if(err) console.log(err)
      
      res.send(JSON.stringify({text:"Изменено"}))
    })
    connect.close();
  })
  .catch((err)=>{
    console.log(err.text)
  })   

})

module.exports = router;
