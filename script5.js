// Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

// Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.


function daysToXmas(date) {
    const XmasDate = new Date('Dec 25, 2021');

    let daysToXmas =  (XmasDate - date)/(1000*60*60*24);
    
    if((XmasDate - date)%(1000*60*60*24) ===0){
      return daysToXmas;
    } 
    if((XmasDate - date)%(1000*60*60*24) !==0 )
      return Math.floor(daysToXmas) +1;
}
  
  const date1 =  new Date('Dec 2, 2021')
  console.log(daysToXmas(date1))
