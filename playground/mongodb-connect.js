
//  OBJECT DESTROCTERING !!!
const {MongoClient, ObjectID} = require("mongodb");
//  OLD WAY BELOW :
// const MongoClient = require("mongodb").MongoClient;

// var obj = new ObjectID();
// console.log(obj);

// // es6 object destroctering !!!!
// var user = {name : "andrew", age : 21};
// var {name} = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodosApp", (err,db) => {
  if(err){
    return console.log("Unable to connect to database server");
  }

  console.log("connected to MongoDB server\n");

  // db.collection('Todos').insertOne({
  //   text : "XDXDXD2",
  //   completed : false
  // }, (err,todos) => {
  //   if(err){
  //     return console.log("Unable to insert todo ", err);
  //   }
  //
  //   console.log(JSON.stringify(todos.ops, undefined, 2));
  //
  // })

  // db.collection("Users").insertOne({
  //   name : "Szymon",
  //   age : 21,
  //   location : "Jaworzno"
  // },(err,res) => {
  //   if(err){
  //     return console.log("Unable to insert user to database");
  //   }
  //
  //   console.log("succesfully inserted user to database: \n", JSON.stringify(res.ops[0]._id.getTimestamp(), null, 2));
  // })

  db.close();
});
