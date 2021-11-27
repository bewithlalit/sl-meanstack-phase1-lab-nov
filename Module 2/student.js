function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
}

Student.prototype.add = (name, age, id) => {
   console.log(`${name} is ${age} old`); 
}

Student.prototype.get = () => {
    console.log("get")
}

Student.prototype.update = () => {
    console.log("update")
}

Student.prototype.delete = () => {
    console.log(this.age);
    console.log("delete");
}

var s = new Student("Lalit", 21);
s.add("Pushpa", 23, 2);
s.get();
s.update();
s.delete();