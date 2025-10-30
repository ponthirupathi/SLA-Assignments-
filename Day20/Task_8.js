//Use a callback function to display “Task Complete” after another function finishes.



function task(){
     
    console.log("Task completed.! ");
    
}
function greet(callback){
    console.log("waiting for data.....");
    callback();
    
}
greet(task);