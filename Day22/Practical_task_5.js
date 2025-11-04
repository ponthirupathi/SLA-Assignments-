//Use prototypes to add a new method to all Student objects dynamically.


class Student {
     constructor(name,age){
  this.name = name;
  this.age = age;
     }
}


Student.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};



let student1 = new Student("Kavi", 20);
let student2 = new Student("Alan", 22);


student1.sayHello();
student2.sayHello();
