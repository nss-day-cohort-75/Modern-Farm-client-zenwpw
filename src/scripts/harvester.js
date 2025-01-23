/**
 * This helper func harvests the plants.
 * 
 * @param {Array} Plants - This is an array of plant objects.
 * @returns {Array} - This is an array of harvested seed objects.
 * 
 * It works by going through each plant, figuring out how many should be added, 
 * and then adding that many copies of the plant to the harvestedSeeds array.
 */
export const harvestPlants = (Plants) => {
    const harvestedSeeds = []
    for (const plant of Plants) {
        let output
        if (plant.type === "Corn") {
            output = plant.output / 2}
            else {
                output = plant.output
            }
            for ( let i = 0; i < output; i++) {
                harvestedSeeds.push({...plant }) //pushes copy of the plant spread operator creates copy of object
            }

}
return harvestedSeeds
}


