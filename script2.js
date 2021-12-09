// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece
 function listGifts(letter) {
    // ¡Tú puedes!
    const newStr = leaveOnlyOneSpace(letter);
    console.log(newStr);
    let presentsArr = newStr.split(" ").filter(a=> a && !a.includes('_'));
    console.log(presentsArr);
   

    let count = 0;
    let obj ={}
    presentsArr.map(present => {
        count = 0;
        presentsArr.map(presentIterator => {
            if(present === presentIterator){
                count++
            }
            obj[present] = count;
        })
    })
    return obj;
    

function leaveOnlyOneSpace(str){
    const expRegular = /(\s{2,})/g;
     let oneSpaceStr = str.replace(expRegular,' ');
   return oneSpaceStr;
}}
  

console.log(listGifts('bici coche balón _playstation bici coche    peluche'))