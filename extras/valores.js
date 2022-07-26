function positivos(array){
    var qntd = 0
    for (i of array){
        if(i > 0){
            qntd += 1
        }
    }
    return qntd
}

var array = [1, 2, -5, -6, 4, 1]
console.log(positivos(array))