const {MongoClient, ObjectID} =require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('unable to connect to mongodb');

    }

    console.log('connected to mongo');

const db=client.db('TodoApp');
db.collection('Users').find({name:'beka'}).count().then((count)=>{
    // console.log(docs);
     console.log(JSON.stringify(count,undefined,2));


(err)=>{
    console.log("unable to get data", err);

    }

});



    client.close();
});