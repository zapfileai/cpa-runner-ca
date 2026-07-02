const californiaCities = [
  "Crockett", "Crows Landing", "Culver City", "Cupertino", "Cutten",
  "Cypress", "Daly City", "Dana Point", "Danville", "Davis",
  "Deer Park", "Del Mar", "Delano", "Denair", "Descanso",
  "Desert Hot Springs", "Diablo", "Diamond Bar", "Diamond Springs", "Dillon Beach",
  "Dinuba", "Discovery Bay", "Dixon", "Dodgertown", "Dorris",
  "Douglas City", "Downey", "Downieville", "Duarte", "Dublin",
  "Dunsmuir", "Durham", "East Irvine", "Edwards", "El Cajon",
  "El Centro", "El Cerrito", "El Dorado Hills", "El Granada", "El Monte",
  "El Segundo", "El Sobrante", "El Toro", "El Verano", "Elk Grove",
  "Elmira", "Elverta", "Emeryville", "Encinitas", "Encino",
  "Escalon", "Escondido", "Esparto", "Etna", "Eureka",
  "Exeter", "Fair Oaks", "Fairfax", "Fairfield", "Fallbrook",
  "Farmersville", "Farmington", "Felton", "Ferndale", "Fiddletown",
  "Fillmore", "Firebaugh", "Folsom", "Fontana", "Foothill Ranch",
  "Forest Falls", "Forest Ranch", "Foresthill", "Forestville", "Fort Bragg",
  "Fort Dick", "Fort Irwin", "Fortuna", "Fountain Valley", "Fowler",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
