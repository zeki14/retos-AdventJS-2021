// Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

// Mi cine favorito tiene dos posibilidades:

// • Entrada de un sólo uso: Cuesta 12$ por cada película.

// • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.

function shouldBuyFidelity(times) {
    let limitToPay =12*times;
    let target  = 250;
    for(let i =1; i<times; i++){
      target += 12*Math.pow(0.75, i)
      }
    if(target < limitToPay){
      return true;
    }
    return false;
  }