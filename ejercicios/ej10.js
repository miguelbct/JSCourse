function createarray(n){
    let array=[];
    for(let i=0; i<n;i++){
        console.log(i)
        array[i]=i+1;
    }
    return array;
}

let resultado = createarray(10)
console.log(resultado)