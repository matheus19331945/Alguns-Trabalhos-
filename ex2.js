document.querySelector('#btn').addEventListener('click', ()=>{
    let n1,n2,soma,subtracao,multiplicacao,divisao;
     /*todas as vezes que a info vier de um imput ela vem como se fosse uma string '1' */
    n1=parseInt(document.getElementById('n1').value); /* '1' -> 1 */ 
    n2=parseInt(document.getElementById('n2').value);
     
    soma=n1+n2; 
    subtracao=n1-n2;
    multiplicacao=n1*n2;
    
    //estrutura de decisão = para ver se n2=0

    if (n2==0) //n2>0
    {
        divisao='Impossível dividir por zero!';
    } else {
        divisao= n1/n2;
        // "senão" do codigo, (quando a condition for false)
    }
    // quebra de linha '\n'

    alert ('Soma= '+soma+'\n'+
            'Subrtração= '+subtracao+'\n'+
            'Multiplicação= '+multiplicacao+'\n'+
            'Divisão= '+divisao);
})


    
/*estrutura de decisão necessita que vc coloque as variaveis ali */

/* Pra fazer numero com virgula troque o tipo por text e coloca parsefloat */

/* NaN - not a number = nao é um numero

acrescentar os cálculos de subtração n1-n2, multiplicação n1*n2  e divisão, e mostrar que ao digitar 0 eu nao posso dividir por 0
n1/n2 se n2>0

Mostrar os resultados no mesmo alert, somente quebrando a linha */
