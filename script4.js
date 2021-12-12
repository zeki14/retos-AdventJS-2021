// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

// Si le pasamos el argumento 5, se pintaría esto:

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____
// Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

function createXmasTree(height) {
    let maxWidth = 2*(height-1)+1;
    let tree =""
    //Hojas
    for(let i = 0; i < height; i++){
        let leaves = 2*(i) + 1;
        let spaces = maxWidth - leaves;
        tree += `${"_".repeat(spaces/2)}${"*".repeat(leaves)}${"_".repeat(spaces/2)}\n`;
    }
    //Tronco
        tree += `${"_".repeat((maxWidth -1)/2)}#${"_".repeat((maxWidth -1)/2)}\n`;
        tree += `${"_".repeat((maxWidth -1)/2)}#${"_".repeat((maxWidth -1)/2)}`;
    return tree;
  }
  console.log(createXmasTree(5))