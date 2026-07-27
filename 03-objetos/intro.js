
function createUser(name,mail){
    return{
        name,
        mail,
        account: true,
        passres:function(){
            console.log("Restoring password")
        }
    }
}
let user1=createUser('Miguel','miguelctta@gmail.com')
// console.log(user1)

function User(){
    this.id=1
}
let user2=new User();
// console.log(user2)

console.log(Object.entries(user1))