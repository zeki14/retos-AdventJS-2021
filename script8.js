// Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

// Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

// La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra. 💰💰💰

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc))

function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
    let arrDiff =[];
    let diff = 0;
    for(let i =0; i < prices.length -1; i++){
      for(let j= i+1; j<prices.length; j++){
        diff = prices[j]-prices[i];
        arrDiff.push(diff)
      }
    }
    console.log(arrDiff);
    
    const diffPossitive = arrDiff.filter(num => num > 0);
    console.log(diffPossitive);

    if(diffPossitive.length === 0 ){
        return -1;
    }
    let value = Math.max(...diffPossitive);
        return value;
    
  }


// const pricesAda = [3, 3, 3, 3, 3]
// maxProfit(pricesAda)