/*******************************************************
*
* TAREFA: Faça uma função que recebe um valor inteiro
* e verifica se o valor é par. A função deve retornar 1
* se o valor for par e 0 se for ímpar.
*
********************************************************/

// Declaração da função
function isPar(number) {
    /************************************
    * Essa função pode ser um pouquinho mais complicada
    * porque ela envolve um pequeno operador que você
    * talvez não conheça. Esse operador é o %
    *************************************/
    if(number % 2 !== 0) {
        /******************************************************************
        * Esse operador faz uma divisão pelo número à direita(2 nesse caso)
        * e retorna o resto da operação. Portanto, qualquer número dividido
        * por dois que retorne algo = 0 é par.
        ******************************************************************/
        console.log("É par!");
        return 1;
    } else {
        /*****************************************************************
        * Se não for o primeiro if, ou seja, se a condição inicial lá encima
        * não for satisfeita, então teremos o else entrando em ação, e nesse
        * caso a gente vai ter um ímpar.
        *****************************************************************/
        console.log("É ímpar!");
        return 0;
    }
}

// Testamos a função então!
isPar(2) // Resultado Esperado: É par 
isPar(3) // Resultado esperado: é ímpar
isPar(36) // Resultado esperado: é par
isPar(77) // Resultado esperado: é ímpar

/**********************************************************************
* Para melhor visualização você pode simplesmente copiar e colar a funçãoa
* no seu console e tentar rodar cada teste!
**********************************************************************/
