
import { usePlants} from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")

// Create the yearly planting plan
const yearlyPlan = createPlan();
console.log("Yearly Plan:", yearlyPlan);

// Get the array of plants currently growing in the field
const growingPlants = usePlants();
console.log("Growing Plants:", growingPlants);

// Harvest the plants from the field
const harvestedFood = harvestPlants(growingPlants);
console.log("Harvested Food:", harvestedFood);

// Render the harvested food to the DOM
Catalog(harvestedFood);