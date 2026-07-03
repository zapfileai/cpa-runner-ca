const californiaCities = [
  "Frazier Park", "Freedom", "Fremont", "Fresno", "Friant",
  "Fullerton", "Fulton", "Galt", "Garden Grove", "Gardena",
  "Georgetown", "Geyserville", "Gilroy", "Glen Ellen", "Glendale",
  "Glendora", "Goleta", "Gonzales", "Goshen", "Granada Hills",
  "Grand Terrace", "Granite Bay", "Grass Valley", "Greenbrae", "Greenfield",
  "Grenada", "Gridley", "Grizzly Flats", "Grover Beach", "Guadalupe",
  "Gualala", "Guerneville", "Gustine", "Hacienda Heights", "Half Moon Bay",
  "Hamilton City", "Hanford", "Happy Camp", "Harbor City", "Hathaway Pines",
  "Hawthorne", "Hayward", "Healdsburg", "Helendale", "Hemet",
  "Herald", "Hercules", "Hermosa Beach", "Hesperia", "Hickman",
  "Hidden Valley Lake", "Highland", "Hilmar", "Hollister", "Holt",
  "Holtville", "Homewood", "Hopland", "Hughson", "Huntington Beach",
  "Huntington Park", "Hydesville", "Idyllwild", "Igo", "Imperial",
  "Imperial Beach", "Indian Wells", "Indio", "Inglewood", "Inverness",
  "Ione", "Irvine", "Isleton", "Jackson", "Jamestown",
  "Jamul", "Joshua Tree", "Julian", "Kelseyville", "Kentfield",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
