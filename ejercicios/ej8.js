let array = [{
    id:1,
    name: 'Nicolas',
},{
    id:2,
    name: 'Maria',
},{
    id:3,
    name: 'Miguel',
},{
    id:4,
    name: 'Jose',
}];

function pares(arr){
    let orde = [];
    for(let elemento in arr){
        orde[elemento]=[arr[elemento].id,arr[elemento]]
    }
    return orde;
}

console.log(pares(array));

