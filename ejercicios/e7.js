let type = "Dog";
let weight=7;
let foodQuantity;
type=type.toLowerCase();

if(weight>0 && (type=="dog" || type=="cat")){
    if(type== "dog"){
        if(weight<5){
            foodQuantity=100;
        }else if(weight<10){
            foodQuantity=200
        }else if(weight<20){
            foodQuantity=300
        }else{
            foodQuantity=400
        }
    }else if(type=="cat"){
        if(weight<3){
            foodQuantity=50;
        }else if(weight<6){
            foodQuantity=100
        }else{
            foodQuantity=150
        }
    }
    console.log("The",type,"will need ",foodQuantity,"g of food")
}else{
    console.log("Invalid data")
}
