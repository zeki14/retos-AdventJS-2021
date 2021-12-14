// Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

// A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

// La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.



function sumPairs(numbers, result) {
    for(let i = 0; i < numbers.length; i++){
        for(let j= i+1; j < numbers.length;j++){
            let newArr=[numbers[i], numbers[j]]
            if(numbers[i] + numbers[j]===result){
                return newArr
            }
        }
    }
    
    return null
 
 }
 

  console.log(sumPairs([3, 5, 7, 2], 10));