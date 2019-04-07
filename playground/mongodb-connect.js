// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');
//
// var {name}=user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
if(err){
    return console.log('unable to connect to mongodb');

}
console.log('connected to mongo');
// const db=client.db('TodoApp');
//
// db.collection("Todos").insertOne({
//    text: 'something to do',
//    completed:false
// },(err, result)=>{
//     if(err){
//         return console.log('unable to insert', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2))
// });


//     const db=client.db('TodoApp');
//     db.collection('Users').insertOne({
//         name:'beka',
//         age:25,
//         location:'georgia'
//     }, (err, result)=>{
//        if(err){
//            return console.log('unable to insert user data', err)
//        }
//        console.log(result.ops[0]._id.getTimestamp());
//     });
//
client.close();

});