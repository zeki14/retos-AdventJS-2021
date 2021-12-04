// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.



function contarOvejas(arr) {
    // aquí tu magia
    return ovejas.filter(oveja =>{
        let regexA = /a/i;
        let regexN = /n/i;
        let validaA = regexA.test(oveja.name);
        let validaN = regexN.test(oveja.name);
        return validaA && validaN
        && 
        (oveja.color === 'rojo');
    })
}

const ovejas = [
    { name: 'Noa', color: 'rojo' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidd', color: 'rojo' },
    { name: 'Kin a Ma', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)


// function contarOvejas(arr) {
    // aquí tu magia
    // let ovejasRojas = arr.filter(oveja =>{
    //     return oveja['name']
    //     .toLowerCase()
    //     .includes('n' && 'a')
    //     && 
    //     (oveja.color === 'rojo');
    //   })
    //   return ovejasRojas;
    // }