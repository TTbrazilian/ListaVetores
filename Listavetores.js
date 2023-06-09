// exercício 1 -> peça ao usuário para informar 10 números
// calcule e mostra a soma dos elementos pares
function exemplo1(){
    let vetor = []
    let soma =0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (vetor[i] % 2 == 0){
            soma = soma + vetor[i]
        }
    }
    alert(`A soma é ${soma}`)
}
// exercício 2 -> peça ao usuário para informar 10 números
// calcule e mostra a soma dos elementos nas posições ímpares
function exemplo2(){
    let vetor = []
    let soma = 0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (i % 2 == 1){
            soma = soma + vetor[i]
        }
    }
    alert(`Soma ${soma}`)
}
function exe3(){
    let codigos = []
    let estoque = []
    for(let i = 0;i < 5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0 ) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        // vamos procurar o código do produto
        let achou = false // não encontrei o produto
        for(let i=0; i<5;i++){
            if (codigo == codigos[i]){
                achou = true // achou
                if (estoque[i] >= qtde){ // tem em estoque
                    estoque[i] = estoque[i] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
            }
        }
        // encerrou a procura
        if (!achou) { // não encontrou
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
}

//exercício 4 (ok)
            
                //entrada de dados

                let vet = []
                for(let i = 0; i<10; i++){
                    vet[i] = Number(prompt(`Informe o ${i+1}º elemento`))

                }

                let posicoes = []
                for(let i = 0; i<10; i++){
                    if(vet[i] ==30 ){
                        posicoes.push(i)
                    }
            } 
            alert(`Posições aonde o 30 aparecem ${posicoes}`)

            //exercício 5 (ok)
            
                let logica = []
                let linguagem = []
                let comum = []
                 
                 for(let i=0; i<10; i++){
                    logica[i] = Number(prompt(`Informe o ${i}º aluno que faz lógica`))
                 }
                 
                 for(let i=0; i<10; i++){
                    linguagem[i] = Number(prompt(`Informe o ${i}º aluo que faz linguagem`))
                 }
                  for(let i= 0; i<10; i++){
                    if (linguagem.includes(logica[i])){
                     comum.push(logica[i])
                    }
                }
                alert(`Alunos que fazem as duas disciplinas ${comum}`)



                //exercício 6 (ok)
                let vendas = []
                let percentuais = []
                let nomes = []
                let comissoes = []
                for(let i = 0; i<5; i++){
                    vendas[i] = Number(prompt(`Informe venda do ${i+1} vendedor`))
                    percentuais[i] = Number(prompt(`Informe % do ${i+1} vendedor`))
                    nomes[i] = (prompt(`Informe o nome do ${i+1} vendedor`))

                    //calcula a comissão do vendedor

                    comissoes[i] = (vendas[i] / percentuais[i] * 100)
                }

                //fazer calculos
                let total = 0
                let maior = comissoes [0]; let menor = comissoes[0]
                 for(let i = 0; i<5; i++){
                    total = total + vendas[i]
                    if(comissoes[i]> maior){
                        maior = comissoes[i]
                    }
                    if(comissoes[i]<menor){
                        menor = comissoes[i]
                    }
                 }

                 console.log(`Valor total vendido ${total}`)
                 console.log(`Maior valor ${maior} e quem recebe ${nomes[comissoes.indexOf(maior)]}`)
                 console.log(`Menor valor total ${menor} e quem recebe ${nomes[comissoes.indexOf(menor)]}`)
                          

                  //exercício código aluno Repetido
                 {
                     let codigos = []
                     let nome = []

                     
                        for(let i = 0; i < 5; i++){
                            let codigo = Number(prompt(`Informe um código de aluno`))
                            //códigos tem todos os códigos
                            //código tem os códigos digitados pelo usuário
                            //includes verifica se código está dentro de códigos
                            while(codigos.includes(codigo)){

                                 codigo = Number(prompt(`Código já existente, informe um novo código`))
                            
                            }

                            codigos[i] = codigo
                            nome[i] = (prompt(`Informe o nome do aluno`))

                    }
                    console.log(codigo)
                    console.log(nome)
                }

                // exercício 7 (ok)
                {
                    let numeros = []
                    let soma = 0
                    let negativos = 0

                     for(let i = 0; i<10; i++){
                        numeros[i] = Number(prompt(`Informe o ${i+1}º número`))
                       if(numeros[i] > 0){
                        soma =  soma + numeros[i]
                       }
                       else{
                        negativos++
                       }
                    }
                    console.log(negativos)
                    console.log(soma)
                    
                     
                }
                  //exercício 8 (ok)

                function ex8(){

                    let alunos = []
                let media = []
                let maiornota
                let melhoraluno
                let alunosDeRec = []
                let rec = []
                let notaquefalta = []
                  for(let i = 0; i<7 ; i++){
                    alunos[i] = prompt(`Insira o nome do ${i+1}o. aluno`)
                    media[i] = Number(prompt(`Insira a media do ${i+1}o. aluno`))
                }
                        maiornota = media[0]
                        melhoraluno = alunos[0]
                   for(i = 1 ; i<7; i++){
                    if(media[i] >= maiornota){
                        maiornota = media[i]
                        melhoraluno = alunos[i]
                    }
                }
                     for(i = 0; i<7 ; i++){
                      if(media[i]<7){
                        alunosDeRec.push(alunos[i])
                        rec.push(media[i])
                        notaquefalta.push(7-rec[i]) 
                    }
                }
                alert(`Os alunos de recuperação são: ${alunosDeRec} e a nota que falta para eles alcançarem a aprovação é: ${notaquefalta}`)
                alert(`O melhor aluno é: ${melhoraluno} e a sua nota foi: ${maiornota}`)
            }

              //exercício 9 (ok)

              function ex9(){
                let nomeproduto = []
                let codproduto = []
                let precoproduto = []
                let novopreco = []
                 for(let i = 0; i<3; i++){
                    nomeproduto[i] = prompt(`Escreva o nome do ${i+1}o. produto`)
                    codproduto[i] = Number(prompt(`Escreva o código do ${i+1}o. produto`))
                    precoproduto[i] = Number(prompt(`Escreva o preço do ${i+1}o. produto`))
                }
                 for(i = 0; i<3; i++){
                    if(codproduto[i]%2==0){
                        novopreco[i] = Number(precoproduto * 1.15)
                    }
                     else if(precoproduto[i]>1000){
                        novopreco[i] = Number(precoproduto * 1.10)
                    }
                     if((codproduto[i]%2==0)&&(precoproduto[i] > 1000)){
                        novopreco[i] = Number(precoproduto * 1.20)
                    }
                }
                alert(`Nome do produto:`)
                alert(nomeproduto)
                alert(`Código dos produtos:`)
                alert(codproduto)
                alert(`Preço do produto:`)
                alert(precoproduto)
                alert(`Novo preço do produto:`)
                alert(novopreco)
            }


                            

                 









                 

            
