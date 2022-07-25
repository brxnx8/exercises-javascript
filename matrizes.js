function productMatriz (m1, m2){
    
    if(m1[0].length === m2.length){
        
        let m3 = []
        for (var i = 0; i < m1.length; i++){
            
            let linha = [];
            for (var j = 0; j < m2[0].length; j++){
                
                let soma = 0; 
                for (var k = 0; k < m2.length; k++){
                    
                    let valor = m1[i][k] * m2[k][j];
                    soma += valor;
                }
                linha.push(soma);
            }
            m3.push(linha)      
        }
        return m3
    } else{
        
        return false
    
    }
}
var m1 = [ [2,-1], [2,0] ]
var m2 = [ [2,3],[-2,1] ]
var multiplica = productMatriz(m1, m2)
console.log(multiplica)

var m1 = [ [4,0], [-1,-1] ]
var m2 = [ [-1,3], [2,7] ]
var multiplica = productMatriz(m1, m2)
console.log(multiplica)