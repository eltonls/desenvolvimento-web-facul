/***************************************************
*   
*   TAREFA: Desenvolver uma função que recebe dois
*   Números e retorna o menor.
*
* *************************************************/

/************************************************************* 
* Primeiramente eu gostaria de dar meu parecer sobrer funções.
* Eu penso em funções como pequenas máquinas onde você pode
* pôr alguma coisa(parametros) e receber algo(return)
* 
* Elas são blocos de código que resolvem determinado problema.
*
**************************************************************/

// Essa função em especial não é muito díficil.

// Declaração da função.
function retornaMenor(a,b) {
    if(a < b) {
        // Se A é menor que B, retornamos A
        console.log("A é menor que B");
        return a;
    } else if (b < a) {
        // Se B é menor que A, retornamos B
        console.log("B é maior que A");
        return b;
    } else {
        // Caso não caía em nenhum dos outros ifs
        // Significa que os números são iguais.
        /***************************************
        *   Lógica:
        *   Se entre dois números não há um maior 
        *   ou menor, então eles são o mesmo número.
        ****************************************/
        console.log("Números iguais"); 
    }
}

// Chamamos a função para testar:
retornaMenor(2,5);
// Resultado esperado: A é menor que B 
retornarMenor(5, 2);
// Resultado esperado: B é menor que A
retornarMenor(5,5);
// Resultado esperado: Os números são iguais
