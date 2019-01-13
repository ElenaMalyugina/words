var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;


function database(){
  return MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true} );  
}

router.get('/count/', (req, res, next)=>{
  let onlyHardly=req.query.onlyHardly;
  database()
  .then((connect)=>{
    var dbo = connect.db("local"); 
      console.log(typeof onlyHardly);
      let filter = onlyHardly==="true"? {isHardly: true} : {} ;       

      dbo.collection("words").countDocuments(filter)
      .then((resp=>{
        res.send(JSON.stringify({count: resp}));
        connect.close();
      }))      
  })
  .catch((err)=>{
    console.log(err)
  })   

})

router.get('/', (req, res, next)=>{
  let cardId=req.query.id;
  let onlyHardly=req.query.onlyHardly;

  database()
  .then((connect)=>{
    var dbo = connect.db("local");      
      console.log(cardId);
      console.log(onlyHardly);
      let filter = onlyHardly==="true"? {isHardly: true} : {}

      dbo.collection("words").find(filter).skip(cardId-1).limit(1).toArray((err, resp)=>{  
        res.send(JSON.stringify(resp[0]));
        connect.close();
      })
      
  })
  .catch((err)=>{
    console.log(err)
  })   
});

router.post('/', (req, res, next)=>{
  /*console.log(req.body);*/
  database()
  .then((connect)=>{
      var dbo = connect.db("local");
        dbo.collection('words').insertOne(req.body)
            .then((resp)=>{
              console.log(resp);
              res.send(resp.ops[0]);
              connect.close()
        });     
  })      
})

router.put('/', (req, res, next)=>{
  database()
  .then((connect)=>{
    var dbo = connect.db("local");
    var myquery = {_id: ObjectId(req.body._id)};
    var newvalues = {englishWord: req.body.englishWord, russianWord: req.body.russianWord};
    
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

router.put('/setHardly/', (req, res, next)=>{
  database()
  .then((connect)=>{
    var dbo = connect.db("local");
    var myquery = {_id: ObjectId(req.body._id)};
    var newvalues = {isHardly: req.body.isHardly};
    
    dbo.collection("words").updateOne(myquery, {$set:newvalues}, (err, r)=>{
      if(err) console.log(err)
      
      res.send(JSON.stringify({text:"Добавлено в трудно изучаемое"}))
    })
    connect.close();
  })
  .catch((err)=>{
    console.log(err.text)
  })   

})


module.exports = router;
