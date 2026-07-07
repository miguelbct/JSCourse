let device = "phone"
let watts= 0

switch (device){
    case "phone":
        watts=25;
        break;
    case "macbook":
        watts=65;
        break;
    case "flash":
        watts=5;
        break;
    default:
        watts=0;
    }
if (!watts){
    console.log(device," is a not suported device, watts provided: ",watts)
}else{
    console.log("Watts provided: ",watts)
}