// TODO: Write code to define and export the Employee class
class Employee {
  // constructor for new Employee object
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
  // return functions
  getName() {
    return this.name;
  }
  
  getId() {
    return this.id;
  }
  
  getEmail() {
    return this.email;
  }
  
  getRole() {
    return "Employee";
  }
  
}
  
module.exports = Employee;
