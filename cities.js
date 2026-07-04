const californiaCities = [
  "Mather", "Mcarthur", "Mcfarland", "Mckinleyville", "Meadow Vista",
  "Mendocino", "Mendota", "Menifee", "Menlo Park", "Mentone",
  "Merced", "Meridian", "Midpines", "Midway City", "Mill Valley",
  "Millbrae", "Millville", "Milpitas", "Mira Loma", "Mission Hills",
  "Mission Viejo", "Modesto", "Mokelumne Hill", "Monrovia", "Montague",
  "Montara", "Montclair", "Monte Rio", "Montebello", "Monterey",
  "Monterey Park", "Montrose", "Moorpark", "Moraga", "Moreno Valley",
  "Morgan Hill", "Morro Bay", "Moss Beach", "Moss Landing", "Mount Aukum",
  "Mount Baldy", "Mount Hermon", "Mount Shasta", "Mountain View", "Murphys",
  "Murrieta", "Napa", "National City", "Needles", "Nevada City",
  "Newark", "Newberry Springs", "Newbury Park", "Newcastle", "Newhall",
  "Newman", "Newport Beach", "Newport Coast", "Nicasio", "Nice",
  "Nipomo", "Norco", "North Fork", "North Highlands", "North Hills",
  "North Hollywood", "Northridge", "Norwalk", "Novato", "Nuevo",
  "Oak Park", "Oak Run", "Oak View", "Oakdale", "Oakhurst",
  "Oakland", "Oakley", "Occidental", "Oceano", "Oceanside",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
