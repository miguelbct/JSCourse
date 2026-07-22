let pairs = [
    [1,{name:"Nicolas"}],
    [2,{name:"jose"}],
    [3,{name:"Miguel"}],
]
function po(arr){
    let newarr = []
    for(let idx in arr){
        let elemento=arr[idx]
        newarr[idx]=[elemento[0],{'id':elemento[0],'name':elemento[1].name}]
    }
    return newarr;
}

console.log(po(pairs))