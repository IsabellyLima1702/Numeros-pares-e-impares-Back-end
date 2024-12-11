var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradadedados.question('Digite o número inicial:', function(numeroInicial){
    let numero1 = numeroInicial
    entradadedados.question('Digite o número final:', function(numeroFinal){
        let numero2 = numeroFinal
        entradadedados.question(`Escolha um numero para qual separação você deseja:
            SEPARAÇÕES 
            1 Somente números PARES
            2 Somente números ÍMPARES
            3 AMBOS (Pares e Ímpares)
                
            `, function (escolha){
               let operacao = escolha
               
      
            console.log(moduloFuncoes.Validar (numero1, numero2, operacao));
            console.log(moduloFuncoes.ValidarResultado(numero1, numero2, operacao))
                  
        })
    })
})        

        