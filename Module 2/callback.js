function node_Add() {
    const data = {name:"Emp01"};
    db_Add(data, cbPrint);
}

const cbPrint = function Print() {
    console.log("Data is added");
}

function db_Add(data, cb) {
   // Adds data
   cb(); 
}

node_Add()