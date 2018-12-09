var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


function database(){
  return MongoClient.connect('mongodb://127.0.0.1:27017');  
}

router.get('/', (req, res, next)=>{
  let sendToFront={
    count: 0,
    card: null
  }
  let cardId=parseInt(req.query.id);

  database()
  .then((connect)=>{
    var dbo = connect.db("local");
    
    dbo.collection("words").countDocuments()
      .then((count)=>{
        sendToFront.count = count;
      })
      .then(()=>{
        return dbo.collection("words").findOne({id: cardId})
      })
      .then((card)=>{
        sendToFront.card=card;
        res.send(JSON.stringify(sendToFront));
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
        dbo.collection('words').find().sort({id:-1}).limit(1).toArray((err, resp)=>{
            req.body.id=resp[0].id+1;
            dbo.collection('words').insertOne(req.body)
            .then((resp)=>{
              console.log(resp);
              res.send(resp.ops[0]);
              connect.close()
            })
        });
      
  })
      
})

router.put('/', (req, res, next)=>{
  database()
  .then((connect)=>{
    var dbo = connect.db("local");
    var myquery = { id: req.body.id};
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

module.exports = router;
