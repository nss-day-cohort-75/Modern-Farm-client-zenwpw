
import{usePlants } from "./fields.js"


export const harvestPlants = (usePlants) => {
    const harvestedSeeds = []
    for (const plant of usePlants) {
        let output;
        if (plant.type === "Corn") {
            output = plant.output / 2}
            else {
                output = plant.output
            }
        }
for ( let i = 0; i < output; i++) {
    harvestedSeeds.push({...plant }) //pushes copy of the plant spread operator creates copy of object

}
return harvestedSeeds
}


