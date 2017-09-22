
//  OBJECT DESTROCTERING !!!
const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodosApp", (err,db) => {
  if(err){
    return console.log("Unable to connect to database server");
  }

  console.log("connected to MongoDB server\n");

  console.log(  db.collection("Todos").find().count().then((number) => {
    console.log(number);
  }) );

  // .toArray().then((result) => {
  //   console.log(JSON.stringify(result,null,2));
  // }, (err) => {
  //   if(err){
  //     console.log("Unable to fetch data from db ", err);
  //   }
  // });

  //db.close();
});
