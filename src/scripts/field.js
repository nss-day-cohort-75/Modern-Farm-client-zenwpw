const plantsInField = [];

export const addPlant = (seeds) => {
    if (Array.isArray(seeds)) {
        for (const seed of seeds) {
            plantsInField.push(seed);
        }
    } else {
        plantsInField.push(seeds);
    }
};

export const usePlants = () => {
    const fieldClone = structuredClone(plantsInField);
    return fieldClone;
};
