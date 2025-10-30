//Create a callback function that greets a user after getting their name

function user(){
     
    console.log("This is callback fuctction ");
    
}
function greet(callback){
    console.log("hello...!");
    callback();
    
}
greet(user);