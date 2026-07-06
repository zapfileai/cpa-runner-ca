const californiaCities = [
  "Scotts Valley", "Seal Beach", "Seaside", "Sebastopol", "Seeley",
  "Selma", "Shasta", "Shasta Lake", "Shaver Lake", "Sherman Oaks",
  "Shingle Springs", "Shingletown", "Sierra Madre", "Signal Hill", "Silverado",
  "Simi Valley", "Sloughhouse", "Smartsville", "Solana Beach", "Solvang",
  "Somis", "Sonoma", "Sonora", "Soquel", "Soulsbyville",
  "South El Monte", "South Gate", "South Lake Tahoe", "South Pasadena", "South San Francisco",
  "Spring Valley", "Springville", "Squaw Valley", "Stanford", "Stanton",
  "Stevenson Ranch", "Stinson Beach", "Stockton", "Studio City", "Sugarloaf",
  "Suisun City", "Summerland", "Sun City", "Sun Valley", "Sunland",
  "Sunnyvale", "Sunol", "Sunset Beach", "Surfside", "Susanville",
  "Sutter Creek", "Sylmar", "Taft", "Tahoe City", "Tahoe Vista",
  "Tarzana", "Tehachapi", "Temecula", "Temple City", "Templeton",
  "Thermal", "Thornton", "Thousand Oaks", "Thousand Palms", "Three Rivers",
  "Toluca Lake", "Topanga", "Torrance", "Trabuco Canyon", "Tracy",
  "Trinidad", "Trinity Center", "Truckee", "Tujunga", "Tulare",
  "Tulelake", "Tuolumne", "Turlock", "Tustin", "Twain Harte",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < californiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(californiaCities[i]);
}

module.exports = { batches };
