/****************************************
*
* Agora, finalmente a última. Pega um chá
* pega um café, chora um pouco, depois lê isso aqui
* sério, volta, tá? Volta, por favor!
*
* Mas agora sério.
*
* TAREFA: Faça uma função de soma que convoca uma função
* de divisão passando por parametro os valores de parametro
* e o resultado da soma.
*
****************************************/

// Essa aqui me deu nó nas cabeça, mas Deus ajuda 
// em terra de cego.

// Primeiro: DEFINA FUNÇÃO.

// Dessa vez vamos de arrow Function, só para variar
// Função de divisão divide a e b
const divisao = (a,b) => {
    // Agora, a = resultado, b = (a - b da função passada)
    // então a gente divide:
    resultado = a / b;
    return resultado;
}



const soma = (a,b) => {
    // Sim, pode usar os mesmos nomes nos parametros    
    // seu corpo não vai pegar fogo na igreja nem nada.
    const resultado = a + b; // A gente soma ambos os números facilmente.
    // E depois chama a função de divisao
    /*********************************************************
    * Aqui ficou um pouco confuso para mim, porque o professor
    * não disse qual o resultado esperado, portanto a gente
    * pode ir no puro suco do freestyle quântico das banana.
    *********************************************************/
    divisao(resultado, (a-b));
    /****************************************************
    * Decidi passar o resultado com a - b. 
    * Recomendo vocês tentarem maneiras diferentes também
    * e até criar uma função de divisão com três parametros.
    * Não entendi bem qual era a proposta em si, 
    * mas creio que o código tá correto na medida do possível.
    *****************************************************/
    return resultado;
}
