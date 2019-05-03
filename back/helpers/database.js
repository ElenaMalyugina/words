const MongoClient = require('mongodb').MongoClient;
const database = {};

database.connect =()=>{
    return MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true} );  
}

module.exports =  database;