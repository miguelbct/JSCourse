let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let menor=arr[0];
    let mayor=arr[0];
    for(let a of arr){
        if (a>mayor){
            mayor=a;
        }
        if (a<menor){
            menor=a
        }
    }
    console.log("mayor:",mayor,",menor:",menor);
}

getMenorMayor(array);