let watterLevel = true;
let powerState = false;
let watterTemperature = 0;

if (!watterLevel){
    console.log("Can't turn onn, please put watter");
}else{
    powerState= true;
    console.log("Turned onn")
    while(watterTemperature<101){
        console.log("Watter temperature : "+watterTemperature);
        if (watterTemperature==100){
            powerState=false;
            break;
        }
        watterTemperature+=25;
    }
    console.log("Watter is ready hot--Temperature:"+watterTemperature)
}