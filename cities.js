const californiaCities = [
  "Ojai", "Olema", "Olivehurst", "Olympic Valley", "Ontario",
  "Orange", "Orange Cove", "Orangevale", "Oregon House", "Orinda",
  "Orland", "Orosi", "Oroville", "Oxnard", "Pacific Grove",
  "Pacific Palisades", "Pacifica", "Pacoima", "Paicines", "Palm Desert",
  "Palm Springs", "Palmdale", "Palo Alto", "Palo Cedro", "Palos Verdes Peninsula",
  "Panorama City", "Paradise", "Paramount", "Pasadena", "Paso Robles",
  "Patterson", "Patton", "Pauma Valley", "Pebble Beach", "Penn Valley",
  "Penngrove", "Penryn", "Perris", "Pescadero", "Petaluma",
  "Phelan", "Pico Rivera", "Piedmont", "Pilot Hill", "Pine Grove",
  "Pine Mountain Club", "Pine Valley", "Pinole", "Pismo Beach", "Pittsburg",
  "Placentia", "Placerville", "Playa Del Rey", "Playa Vista", "Pleasant Grove",
  "Pleasant Hill", "Pleasanton", "Plymouth", "Point Arena", "Pollock Pines",
  "Pomona", "Port Hueneme", "Porter Ranch", "Porterville", "Portola",
  "Portola Valley", "Potter Valley", "Poway", "Prather", "Quail Valley",
  "Quincy", "Ramona", "Rancho Cordova", "Rancho Cucamonga", "Rancho Mirage",
  "Rancho Palos Verdes", "Rancho Santa Fe", "Rancho Santa Margarita", "Red Bluff", "Redding",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
