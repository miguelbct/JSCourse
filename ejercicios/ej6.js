let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){
    let np=0;
    for(let numero of arr){
        if(numero>0){
            np++;
        }
    }
    return np;
}
let resultado=cuantosPositivos(array);
console.log(resultado)