const {MongoClient} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodosApp", (err, db) => {
  if(err){
    return console.log("unable to connect to database ", err);
  }

  console.log("connected to database");


  // //usunie pierwszy element
  // db.collection("Todos").deleteOne({text : "zadanie"}).then((deletedObj) => {
  //   console.log(deletedObj);
  // }, (err) => {
  //   console.log("something went wrong ", err);
  // });

  // //usunie wszystkie elementy
  // db.collection("Todos").deleteMany({text : "zadanie"}).then((deletedObj) => {
  //   console.log(deletedObj);
  // });


  db.collection('Todos').findOneAndDelete({completed : false});
});
