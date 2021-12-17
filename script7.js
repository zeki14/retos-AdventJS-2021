// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': 'camiseta'
}

function contains(store, product) {
 return(
   store === Object(store)
  //  typeof store === 'object'
     ? Object.values(store).some(container => contains(container, product))
   : store === product
 ) 
}

console.log(contains(almacen, 'camiseta'));