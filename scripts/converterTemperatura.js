/**************************************************
*
* TAREFA: Faça um programa que leia do usuário uma temperatura
* em Fahrenheit, converta-a para graus Celsius e escreva o novo
* valor na tela. 
*
**************************************************/

// WELP!
/****************************************** 
* Essa talvez seja a segunda mais difícil,
* porém ainda não tão difícil. Vem comigo!
*******************************************/

// Primeiramente nós temos que ler o input do usuário
let tempF = prompt("Defina uma temperatura em Fahrenheit!");
/**********************************************************
* O código acima vai gerar uma caixa de texto para o usuário
* onde ele poderá escrever algum tipo de entrada. Parece bem
* deselegante(e é), porém por enquanto é o que temos.
* Vemos também a definição da variável tempF, que vai pegar
* nossa temperatura em Fahrenheit. Lembre-se: a temperatura
* vai estar em formato string inicialmente!
***********************************************************/

function convertToCelsius(tempF) {
   /*********************************************************** 
    * Aqui, apenas precisamos aplicar a fórmula de conversão. 
    * Lembre-se: Em javascript você pode escrever expressões
    * matemáticas sem problemas, porque o próprio javascript 
    * sabe como interpretar. 
    ***********************************************************/

    let celsius = ((tempF - 32) * 5) / 9;
    /*************
    * Simples assim, viu?
    * NOTA: Nosso parametro na função não precisa
    * ter o mesmo nome da variável definida ali em cima
    * apenas reutilizei para que ficasse mais fácil perceber
    * a relação.
    *************/

    // Agora, escrevemos o valor na tela:
    console.log(celsius);
    // E para não perder o costume, retornamos ele também.
    return celsius;
}


