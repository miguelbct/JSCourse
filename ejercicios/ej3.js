function getbyIdx(arr,idx){
    
    if(idx>-1 && (idx<arr.length)){
        return arr[idx]
    }else{
        return false
    }
}
let resultado= getbyIdx([1,2],-1)
console.log(resultado)