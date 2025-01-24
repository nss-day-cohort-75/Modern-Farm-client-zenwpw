
import { usePlants} from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js";


// Create the yearly planting plan
const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

// Get the array of plants currently growing in the field
const growingPlants = usePlants();


// Harvest the plants from the field
const harvestedFood = harvestPlants(growingPlants);


// Render the harvested food to the DOM
const containerElement = document.getElementById('container')
containerElement.innerHTML = Catalog(harvestedFood);


