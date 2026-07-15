user={
    account: false,
    score: 750,
}

// function interestRateCalculator(score){
//     let intRate = 0;
    
//     if (score<650){
//         return 0
//     }else if (score)
// }
if(user.account){
    if (user.score<650){
        console.log("We can't give you a credit")
    }else if (user.score<700){
        console.log("Your credit has been aproved")
        console.log("Your interest rate is 10%")
    }
    else if (user.score<750){
        console.log("Your credit has been aproved")
        console.log("Your interest rate is 15%")
    }else{
        console.log("Your credit has been aproved")
        console.log("Your interest rate is 10%")
    }
}else{
    console.log("You don't have an account")
}