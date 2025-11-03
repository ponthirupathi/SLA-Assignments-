//Create an array of students’ ages and find only adults (≥18).


let student_age = [14, 22, 25, 16, 10, 21, 34, 28, 18]

student_age.filter(greater => {if(greater>=18){
    
    console.log("Adults students:",greater);
    
}});