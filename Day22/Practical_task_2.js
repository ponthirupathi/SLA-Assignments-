//Build an object user with login and logout methods.


class user {
    constructor(username, passoword){

        this.username = username;
        this.passoword = passoword;
    }
    login(){
        if(this.username === "ponthirupathi" && this.passoword === 12345678){
            console.log(`welcome..! ${this.username}`);
            
        }else{
            console.log("Enter valid username or password  ");
            
        }
    }
    logout(){
        if(this.username == "ponthirupathi" && this.passoword == 12345678){
            console.log(`logout suceessfully....!`);
            
        }else{
            console.log("Enter valid username or password  ");
            
    }
}
}

const  login = new user("ponthirupathi" , 12345678 )

login.login();
login.logout();

