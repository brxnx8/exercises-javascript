function product(numb1, numb2){
    if (numb1 === 0){
        return 0
    }else{
        return (product(numb1-1, numb2) + numb2)
    }
}

var x = 50
var y = 5
console.log(product(x, y))