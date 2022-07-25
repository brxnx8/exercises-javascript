// Teste 5 números inteiros aleatórios. Os testes:
// ● Caso o valor seja divisível por 3, imprima no console “fizz”.
// ● Caso o valor seja divisível por 5 imprima “buzz”.
// ● Caso o valor seja divisível por 3 e 5, ao mesmo tempo, imprima
// “fizzbuzz”.
// ● Caso contrário imprima nada



function numbersTest(n1, n2, n3, n4, n5){
    let array = [n1, n2, n3, n4, n5]
    for (i of array){
        if (i % 3 === 0){
            var situaçao3 = true
        }else {
            var situaçao3 = false
        }
        if (i % 5 === 0){
            var situaçao5 = true
        }else {
            var situaçao5 = false
        }
        
        if (situaçao3 && situaçao5){
            console.log(i, 'fizzbuzz')
        }else if (situaçao3){
            console.log(i, 'fizz')
        }else if (situaçao5){
            console.log(i, 'buzz')
        }else{
            console.log(i)
        }

    }
}

numbersTest(15, 5, 8, 3, 9)