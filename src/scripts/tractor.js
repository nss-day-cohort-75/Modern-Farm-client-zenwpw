import { yearlyPlan } from "./main.js"; 
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

/**
 * Plants seeds in the field according to the provided ${yearlyPlan}.
 * 
 * @param {Array<Array<string>>} yearlyPlan - A 2D array representing the year's planting plan.
 * Each inner array represents a ${row} in the field, and each string in the inner array
 * represents the type of crop to be planted at that location. The ${row} parameter in
 * the inner loop refers to each of these inner arrays, allowing us to iterate over
 * each crop type in the ${yearlyPlan}.
 */
const plantSeeds = (yearlyPlan) => {
  yearlyPlan.forEach((row) => {
    row.forEach((cropType) => {
      switch (cropType) {
        case "Asparagus":
          addPlant(createAsparagus());
          break;
        case "Corn":
          createCorn().forEach((seed) => addPlant(seed));
          break;
        case "Potato":
          addPlant(createPotato());
          break;
        case "Soybean":
          addPlant(createSoybean());
          break;
        case "Sunflower":
          addPlant(createSunflower());
          break;
        case "Wheat":
          addPlant(createWheat());
          break;
        default:
          console.log(`Unknown crop type: ${cropType}`);
      }
    });
  });
}

plantSeeds(yearlyPlan);