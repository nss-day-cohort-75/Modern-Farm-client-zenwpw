const plantsInField = [];

export const addPlant = (seeds) => {
    for (const seed of seeds) {
        if (Array.isArray(seeds)) {
            plantsInField.push(seed)
        }
        else {
            plantsInField.push(seeds)
        }
    }
}
    

export const usePlants = () => {
    const fieldClone = structuredClone(plantsInField)
    return fieldClone
};