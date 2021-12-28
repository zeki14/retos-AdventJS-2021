function groupBy(collection, it) {
    const groupByObject = new Map()
      
   collection.forEach(val =>{
     let key = typeof(it) === 'function' ? it(val) : val[it];
     let value = groupByObject.get(key) || [];
     groupByObject.set(key, [...value, val])

   })

    return groupByObject
  }


 console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); 

