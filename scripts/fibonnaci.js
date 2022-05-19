/***************************************************
* 
*	TAREFA: Faça uma função recursiva que imprima o fibonacci até 55.
*
****************************************************/

// Antes de tudo... QUE DIABOS É FIBONACCI?
// Segue explicação do TODAMATERIA.COM.BR
/*********************************************************
* Trata-se do exemplo clássico dos coelhos, em que fibonacci
* descreve o crescimento de uma população desses animais.
* A sequência é definida mediante a seguinte fórmula:
* 
* Fn = Fn - 1 + Fn - 2
*
* Recomendo ler no Site deles, mais fácil:
* 
* https://www.todamateria.com.br/sequencia-de-fibonacci/
*
**********************************************************/

// Recebe um numeral inicial né,
// porque ninguém é de ferro!
function fibonacciAteCinquenta(numeroAtual) {
    /*************************************************
    * Começando pelo inicial, a sequência é formada
    * somando cada numeral com o numeral que o antecede.
    * No caso do 1, repete-se o 1
    *************************************************/

    let fibonacci;
    let antecessor;

    // Primeira a gente vê se temos o 1
    if(numeroAtual === 1) {
        // se numeroAtual = 1, somamos com 1
        fibonacci = 1 + 1;
        // Chamamos o fibonacci de novo,
        // porque a função tem que ser recursiva
        return fibonacciAteCinquenta(fibonacci);
    } else if(numeroAtual !== 1 && fibonacci <= 55) {
        /****************************************
        * Caso o número não seja 1 (numeroAtual !== 1)
        * e (&&)
        * Seja menor ou igual a 55 (fibonacci <= 55)
        * Então roda o código aqui!
        *****************************************/
        antecessor = numeroAtual - 1; // O antecessor é o númeroAtual - 1
        fibonacci = numeroAtual + antecessor; //  e fibonacci = número atual + antecessor
        return fibonacciAteCinquenta(fibonacci); // Retorna a função recursiva
    }

    // Agora a questão:
    /********************************************************
    * Fibonacci deve funcionar com números negativos?
    * Certamente que não. Mas eu não sei, não sou matemático.
    * Gostaria de propor que você desenvolvesse uma lógica
    * para testar se o número é negativo!
    *********************************************************/

    console.log("ACABO! Fibonacci Final: " + fibonacci);
    return fibonacci;
}
