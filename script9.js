function groupBy(collection, it) {
  return collection.reduce( (obj, item) => {
    let index = typeof it === "function" ? it(item) : item[it] // El index cambia según el tipo de criterio que se recibe
    return { 
      ...obj,
      [index]: [...(obj[index] || []), item]
    }; // Devolver objeto añadiendo los resultados anteriores
  }, {})
}