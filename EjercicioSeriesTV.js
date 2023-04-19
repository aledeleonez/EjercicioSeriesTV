//Alejandro de León Fernández 

let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
seriesPending.push('The IT Crowd');

//console.log(seriesPending); --> ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer', 'Computer Scientist']

for (let i = 0; i < seriesPending.length; i++) {
  console.log(`Serie con indice: ${i} -> ${seriesPending[i]}`);
}

/*
  Serie con indice: 0 -> Breaking Bug
  Serie con indice: 1 -> Game of Drones
  Serie con indice: 2 -> Boolean 99
  Serie con indice: 3 -> Arrested Developer
  Serie con indice: 4 -> Computer Scientist
*/

for (let i = 0; i < seriesPending.length; i++) {
  console.log(`Serie con indice: ${i} -> ${seriesPending[i]}`);
  if (seriesPending[i] == 'Boolean 99') {
    console.log('Serie encontrada');
    break;
  }
}

/*
  Serie con indice: 0 -> Breaking Bug
  Serie con indice: 1 -> Game of Drones
  Serie con indice: 2 -> Boolean 99
  Serie encontrada
*/ 

let seriesWatching = [];

seriesWatching.push(seriesPending.shift());
console.log(`Longitud seriesWatching: ${seriesWatching.length} , Longitud seriesPending: ${seriesPending.length}`);

/* Longitud seriesWatching: 1 , Longitud seriesPending: 1 */

for (let i = 0; i < 4; i++) {
  seriesWatching.push(seriesPending.shift());
}
 
console.log(`Longitud seriesWatching: ${seriesWatching.length}, Longitud seriesPending: ${seriesPending.length}`);

/* Longitud seriesWatching: 5, Longitud seriesPending: 0 */

seriesWatching.splice(0, seriesWatching.length);
console.log(`Longitud seriesWatching: ${seriesWatching.length}, Longitud seriesPending: ${seriesPending.length}`);

/* Longitud seriesWatching: 0, Longitud seriesPending: 0 */