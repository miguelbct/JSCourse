function createUser(name,mail){
    return{
        name,
        mail,
        saveing: function(){
            console.log("saving user:",name)
        },
    };
}

let user1=createUser('Miguel','miguelctta@gmail.com')  

console.log(user1)