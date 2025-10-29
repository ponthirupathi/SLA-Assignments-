//Print a multiplication table (e.g., 5 × 1 to 5 × 10).
console.log("Practical_Task_otuput_1");

for (let r = 1; r <= 10; r++) {

    let c = r*5;
    console.log("5*"+r+"="+c);
   
}

//Sum all numbers from 1 to 100 using a for loop.
console.log("Practical_Task_otuput_2");

let a = 0;
for(let p =1 ; p<=100 ; p++){
    a=a+p;
}
console.log(a);

//Display all odd numbers between 1–50 using while
console.log("Practical_Task_otuput_3");

let i= 1;

while(i<=50){
   
    if(i%2!=0){
        console.log(i);
        
    }
     i++;
}

//Use break to stop the loop when a specific number (say 10) is reached.
console.log("Practical_Task_otuput_5");


for(let o = 1; o<=20; o++)
{
    if(o==10) break
    {
       console.log(o);
       
    }
}

        
