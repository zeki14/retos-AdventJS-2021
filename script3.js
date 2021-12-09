  function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    // const characters = letter.split("");
    let openParenthesis = letter.match(/\(/g) +1;
    let closeParenthesis = letter.match(/\)/g) +1;
    if(openParenthesis.length === closeParenthesis.length
        && !letter.match(/\[|\]|\{|\}/)
        && !letter.match(/(\(\))/)){
        return true
    }
    return false;
   }

   let gifts = "bici coche balón bici coche";
   console.log(isValid(gifts));