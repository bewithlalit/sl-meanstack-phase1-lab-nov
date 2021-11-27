function Employee(name, designation, department){
    this.name = name;
    this.designation = designation;
    this.department = department;
}

Employee.prototype.add = function() {
    console.log(this.name);
    console.log("adding to database");
}

Employee.prototype.update = function(name) {
    console.log("Employee Name ",name)
}

var emp = new Employee("Emp01", "Developer", "IT");
console.log(emp);
emp.add();
emp.update("Lalit");