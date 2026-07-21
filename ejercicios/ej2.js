function nombreResolucion(ancho,alto){
    if (ancho>1279 && alto>719){
        if (ancho<1920 && alto<1080){
            return "HD"
        }else if (ancho<2560 && alto<1440){
            return "FHD"
        }else if (ancho<3840 && alto<2160){
            return "WQHD"
        }else if (ancho<7680 && alto<4320){
            return "4K"
        }else{
            return "8K"
        }
    }else{
        return false
    }
}

let nombre=nombreResolucion(7680,720);
console.log(nombre)