let cupNumber = 2;
let container = true;
const timeByCup = 1;

if (!container){
    console.log('Please put the container on the machine')
}else{
    if (cupNumber<1){
        console.log('Please input a valid cup number')
    }else{
        let processTime = cupNumber*timeByCup;
        console.log('Starting process')
        console.log('Number of cups: ',cupNumber)
        console.log('Time to wait for finish the process: ',processTime,' minutes')
    }
}