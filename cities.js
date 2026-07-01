const californiaCities = [
  "Calexico", "Caliente", "Calimesa", "Calistoga", "Camarillo",
  "Cambria", "Camino", "Campbell", "Camptonville", "Canoga Park",
  "Canyon Country", "Capistrano Beach", "Capitola", "Cardiff By The Sea", "Carlsbad",
  "Carmel", "Carmel By The Sea", "Carmel Valley", "Carmichael", "Carnelian Bay",
  "Carpinteria", "Carson", "Caruthers", "Caspar", "Castaic",
  "Castro Valley", "Castroville", "Cathedral City", "Catheys Valley", "Cayucos",
  "Cedar Ridge", "Cedarville", "Ceres", "Cerritos", "Chatsworth",
  "Chester", "Chicago Park", "Chico", "Chino", "Chino Hills",
  "Chowchilla", "Chula Vista", "Cima", "Citrus Heights", "City Of Industry",
  "Claremont", "Clarksburg", "Clayton", "Clearlake", "Clearlake Oaks",
  "Cloverdale", "Clovis", "Coachella", "Coalinga", "Coarsegold",
  "Cobb", "Colfax", "Coloma", "Colton", "Columbia",
  "Colusa", "Compton", "Concord", "Cool", "Copperopolis",
  "Corcoran", "Corning", "Corona", "Corona Del Mar", "Coronado",
  "Corte Madera", "Costa Mesa", "Cotati", "Cottonwood", "Coulterville",
  "Courtland", "Covina", "Coyote", "Crescent City", "Crestline",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
