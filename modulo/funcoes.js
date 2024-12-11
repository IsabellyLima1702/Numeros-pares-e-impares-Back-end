const Validar = function (numeroInicial, numeroFinal, escolha){
    let numero1 = numeroInicial
    let numero2 = numeroFinal
    let operacao = escolha
    let status = true

    if(numero1 == '' || numero2 == ''){
        console.log('ERRO: É obrigatório todas as entradas de dados.')
        status = false
    }else{
        if(isNaN(numero1) == true || isNaN(numero2) == true){
            console.log('ERRO: É obrigatório somente a entrada de valores numéricos.')
            status = false
        }else{
            if(numero1 < 0 || numero1 > 500){
                console.log('ERR0: É Obrigatório a entrada de números entre 0 e 500.')
                status = false
            }else{
                if(numero2 < 100 || numero2 > 1000){
                    console.log('ERRO: É obrigatório a entrada de números entre 100 e 1000.')
                    status = false
                }else{
                    if(numero1 == numero2){
                        console.log('ERRO: É obrigatório que os números sejam diferentes.')
                        status = false
                    }else{
                        if(numero1 > numero2){
                            console.log('ERRO:O número inicial não pode ser maior que o final. ')
                            status = false    
                        }else{
                            if(operacao != 1 && operacao != 2 && operacao !=3){
                                console.log('ERRO: Não é permitido outras separações que não sejam 1,2,3.')
                                status = false
                            }   
                        }
                    }
                }
            }
        }
    }
    return status
}

const ValidarResultado = function(numeroInicial, numeroFinal, escolha){
    let numero1 = numeroInicial
    let numero2 = numeroFinal
    let operacao = escolha
    let status = false
   
    if(operacao == 1){
        numero1.filter(escolha => escolha % 2 === 0)
        numero2.filter(escolha => escolha % 2 === 0)
        status = true

    }else if(operacao == 2){
        numero1.filter(escolha => escolha % 2 !== 0)
        numero2.filter(escolha => escolha % 2 !== 0)
        status = false
    
    }
    return status
}

module.exports = {
    Validar,
    ValidarResultado
}
