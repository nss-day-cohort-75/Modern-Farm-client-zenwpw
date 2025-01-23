//I think I need to import from fields the plant array?  to access the seeds?
import{usePlants } from "./fields.js"


export const harvestPlants = (plantsArray) => {
    const harvestedSeeds = []
    for (const plant of plantsArray) {
        let output
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


