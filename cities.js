const californiaCities = [
  "Redlands", "Redondo Beach", "Redwood City", "Redwood Valley", "Reedley",
  "Rescue", "Reseda", "Rialto", "Richmond", "Richvale",
  "Ridgecrest", "Rimforest", "Rio Linda", "Rio Vista", "Ripon",
  "Riverbank", "Riverdale", "Riverside", "Rocklin", "Rodeo",
  "Rohnert Park", "Rosamond", "Rosemead", "Roseville", "Ross",
  "Rowland Heights", "Running Springs", "Sacramento", "Saint Helena", "Salida",
  "Salinas", "San Andreas", "San Anselmo", "San Bernardino", "San Bruno",
  "San Carlos", "San Clemente", "San Diego", "San Dimas", "San Fernando",
  "San Francisco", "San Gabriel", "San Geronimo", "San Jacinto", "San Jose",
  "San Juan Bautista", "San Juan Capistrano", "San Leandro", "San Lorenzo", "San Lucas",
  "San Luis Obispo", "San Marcos", "San Marino", "San Martin", "San Mateo",
  "San Miguel", "San Pablo", "San Pedro", "San Rafael", "San Ramon",
  "San Ysidro", "Sanger", "Santa Ana", "Santa Barbara", "Santa Clara",
  "Santa Clarita", "Santa Cruz", "Santa Fe Springs", "Santa Margarita", "Santa Maria",
  "Santa Monica", "Santa Paula", "Santa Rosa", "Santa Ynez", "Santa Ysabel",
  "Santee", "Saratoga", "Sausalito", "Scotia", "Scott Bar",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
