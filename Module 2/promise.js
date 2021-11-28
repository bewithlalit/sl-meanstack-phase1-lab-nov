function node_Add() {
    const data = {name:"Emp01"};
    // calling asynchronous
    db_Add(data).then(
        (value)=>{
            console.log("Data is printed")
        },
        (err)=>{
            console.log("Error occured")
        }
    )
}

function db_Add(data){
    return new Promise((resolve, reject) => {
        // add data
        if(err) {
            reject();
        }
        resolve("success");
    })
}

node_Add();