const vehicles = [
  // for this img src = $/Vehicles/{vehicle.id = 0}-{vehicle.model = 0}-{vehicle.color = 0}
  {
    id: 0,
    year: 2024,
    name: "4Runner",
    model: 0,
    availableModels: [0, 1, 2],
    color: 0,
    engine: 0,
  },
  {
    id: 1,
    year: 2023,
    name: "bZ4X",
    model: 3,
    availableModels: [3, 4],
    color: 0,
    engine: 1,
  },
  {
    id: 2,
    year: 2024,
    name: "Camry",
    model: 5,
    availableModels: [5, 6, 7],
    color: 0,
    engine: 0,
  },
];

const models = [
  //4Runner models
  {
    id: 0,
    name: "SR5",
    price: 40_155,
    estimatedMilesPerGalon: "16/19",

    vehicleId: 0,
  },
  {
    id: 1,
    name: "TRD Sport",
    price: 43_565,
    estimatedMilesPerGalon: "16/19",

    vehicleId: 0,
  },
  {
    id: 2,
    name: "SR5 Premium",
    price: 43_765,
    estimatedMilesPerGalon: "16/19",

    vehicleId: 0,
  },
  //bZ4X models
  {
    id: 3,
    name: "XLE",
    price: 42_000,
    estimatedMilesPerGalon: "16/19",

    vehicleId: 1,
  },
  {
    id: 4,
    name: "Limited",
    price: 46_7000,
    estimatedMilesPerGalon: "16/19",

    vehicleId: 1,
  },
  //Camry Models
  {
    id: 5,
    name: "LE",
    price: 26_420,
    estimatedMilesPerGalon: "28/39",

    vehicleId: 2,
  },
  {
    id: 6,
    name: "SE",
    price: 27_960,
    estimatedMilesPerGalon: "28/39",

    vehicleId: 2,
  },
  {
    id: 7,
    name: "XLE",
    price: 31_170,
    estimatedMilesPerGalon: "27/38",

    vehicleId: 2,
  },
];

const colors = [
  // UPDATE: I Use ALL Colors for ALL Vehicles
  // vehicle 0 model 0 collors
  { id: 0, name: "NAUTICAL BLUE METALLIC", value: "#1B1A49", price: 500 },
  { id: 1, name: "ICE CAP", value: "#FFFFFF", price: 600 },
  { id: 2, name: "CLASSIC SILVER METALLIC", value: "#808080", price: 700 },
  { id: 3, name: "MIDNIGHT BLACK METALLIC", value: "#00031E", price: 800 },
];

const engines = [
  {
    id: 0,
    price: 8_500,
    name: "Electric Motor with Front-Wheel Drive",
    type: "1 Speed Automatic",
    features: [
      "Est. Range: 252 mi. (XLE) / 242 mi. (Limited)",
      "201 total system hp w/ 196 lb.-ft. total system max torque",
      "Front-Wheel Drive (FWD)",
    ],
  },
  {
    id: 1,
    price: 10_900,
    name: "Electric Motors with All-Wheel Drive",
    type: "1 Speed Automatic",
    features: [
      "Est. Range: 228 mi. (XLE) / 222 mi. (Limited)",
      "214 total system hp w/ 248 lb.-ft. total system max torque",
      "All-Wheel Drive (AWD)",
    ],
  },
];

// vehicles
export function getAllVehicles() {
  return vehicles;
}
export function getVehicleById(id) {
  return vehicles.find((c) => c.id === id);
}

// models
export function getAllModels() {
  return models;
}

export function getModelById(id) {
  return models.find((m) => m.id === id);
}

export function getAllModelsByVehicleId(id) {
  return models.filter((m) => m.vehicleId === id);
}

// colors
export function getAllColors() {
  return colors;
}

export function getColorById(id) {
  return colors.find((c) => c.id === id);
}

//engines
export function getAllEngines() {
  return engines;
}

export function getEngineById(id) {
  return engines.find((e) => e.id === id);
}

//calculation
export function calculateTotalPrice(vehicle) {
  const modelPrice = getModelById(vehicle.model).price;
  const colorPrice = getColorById(vehicle.color).price;
  const enginePrice = getEngineById(vehicle.engine).price;
  return modelPrice + colorPrice + enginePrice;
}
