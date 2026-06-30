const californiaCities = [
  "Acampo", "Acton", "Adelanto", "Agoura Hills", "Aguanga",
  "Ahwahnee", "Alameda", "Alamo", "Albany", "Alhambra",
  "Aliso Viejo", "Alpine", "Altadena", "Alturas", "American Canyon",
  "Anaheim", "Anderson", "Angels Camp", "Angwin", "Antelope",
  "Antioch", "Apple Valley", "Applegate", "Aptos", "Arcadia",
  "Arcata", "Arnold", "Arroyo Grande", "Artesia", "Atascadero",
  "Atherton", "Atwater", "Auberry", "Auburn", "Avery",
  "Avila Beach", "Azusa", "Bakersfield", "Baldwin Park", "Banning",
  "Barstow", "Bass Lake", "Bayside", "Beaumont", "Bell Gardens",
  "Bella Vista", "Bellflower", "Belmont", "Belvedere Tiburon", "Ben Lomond",
  "Benicia", "Berkeley", "Bethel Island", "Beverly Hills", "Bieber",
  "Big Bear Lake", "Big Oak Flat", "Big Sur", "Bishop", "Blairsden Graeagle",
  "Blue Jay", "Blythe", "Bodega Bay", "Bonita", "Bonsall",
  "Boulder Creek", "Brawley", "Brea", "Brentwood", "Bridgeport",
  "Brisbane", "Browns Valley", "Buellton", "Buena Park", "Burbank",
  "Burlingame", "Burney", "Byron", "Cabazon", "Calabasas",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
