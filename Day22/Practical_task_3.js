//Create a class Student with constructor and display() method — make 3 students.

class Student{
    constructor(name, age , location , coures){

        this.name = name;
        this.age = age;
        this.location = location;
        this.coures = coures;
    }

    display(){

        console.log(`${this.name} ${this.age} ${this.location} ${this.coures}`);
        
    }
}

const pon = new Student("ponthirupathi" , "22" , "soorakudi" , "B.Sc[AIDS]");
const sasi = new Student("sasi" , "22" , "thirupathur" , "BCA");
const narseh = new Student("naresh" , "21" , "thanjavur" , "B.com(CA)");
const karnan = new Student("karnan" , "23" , "mayiladuthurai" , "B.sc[cs]");
const kalai = new Student("Kalai" , "25" , "madurai" , "B.Sc(cdfs)")

pon.display()
karnan.display()
narseh.display()
kalai.display()
sasi.display()
