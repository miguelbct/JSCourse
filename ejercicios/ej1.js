function cualEsMayor(a,b){
    if (a===b){
        return "equals";
    }else if(a>b){
        return a;
    }else{
        return b;
    }
}

let mayor = cualEsMayor(2,2);