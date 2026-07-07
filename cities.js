const californiaCities = [
  "Twentynine Palms", "Ukiah", "Union City", "Universal City", "Upland",
  "Vacaville", "Valencia", "Vallejo", "Valley Center", "Valley Springs",
  "Valley Village", "Van Nuys", "Venice", "Ventura", "Verdugo City",
  "Victor", "Victorville", "Vidal", "Villa Park", "Visalia",
  "Vista", "Volcano", "Walnut", "Walnut Creek", "Wasco",
  "Waterford", "Watsonville", "Weaverville", "Weed", "Weimar",
  "West Covina", "West Hills", "West Hollywood", "West Sacramento", "Westlake Village",
  "Westminster", "Westmorland", "Whitethorn", "Whittier", "Wildomar",
  "Williams", "Willits", "Willow Creek", "Willows", "Wilmington",
  "Wilseyville", "Wilton", "Winchester", "Windsor", "Winnetka",
  "Winters", "Wofford Heights", "Woodbridge", "Woodland", "Woodland Hills",
  "Wrightwood", "Yorba Linda", "Yorkville", "Yosemite National Park", "Yreka",
  "Yuba City", "Yucaipa", "Yucca Valley", "Zamora",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
