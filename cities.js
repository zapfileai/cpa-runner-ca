const californiaCities = [
  "Kenwood", "Kerman", "King City", "Kings Beach", "Kingsburg",
  "Knightsen", "La Canada Flintridge", "La Crescenta", "La Habra", "La Honda",
  "La Jolla", "La Mesa", "La Mirada", "La Palma", "La Puente",
  "La Quinta", "La Verne", "Ladera Ranch", "Lafayette", "Laguna Beach",
  "Laguna Hills", "Laguna Niguel", "Laguna Woods", "Lagunitas", "Lake Arrowhead",
  "Lake Elsinore", "Lake Forest", "Lake Hughes", "Lake Isabella", "Lakeport",
  "Lakeside", "Lakewood", "Lancaster", "Larkspur", "Lathrop",
  "Laton", "Lawndale", "Laytonville", "Lebec", "Lemon Grove",
  "Lemoore", "Lincoln", "Linden", "Lindsay", "Live Oak",
  "Livermore", "Livingston", "Lockeford", "Lodi", "Loma Linda",
  "Lomita", "Lompoc", "Lone Pine", "Long Beach", "Loomis",
  "Los Alamitos", "Los Alamos", "Los Altos", "Los Angeles", "Los Banos",
  "Los Gatos", "Los Olivos", "Los Osos", "Loyalton", "Lucerne",
  "Lynwood", "Macdoel", "Madera", "Magalia", "Malibu",
  "Mammoth Lakes", "Manhattan Beach", "Manteca", "March", "Marina",
  "Marina Del Rey", "Mariposa", "Markleeville", "Martinez", "Marysville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
