# _TERMINAL WARRIORS_ 
---

## Modern_Farm
HARVEST PLAN:
** setting up code**
1. Initialize the GitHub Repository
Access the GitHub Classroom link provided by your mentors.
Complete the repository setup as outlined in the GitHub Workflow Guide.
2. Start the Project
Follow the "Begin a Project With Starter Code" process to set up the initial project structure.
3. Install Dependencies
Open your terminal and execute the following command:
npm install
npm run test
ETC

**creation of the harvest plan**
1. Generate the Yearly Harvest Plan
-Open the plan.js module
-review the createPlan() function 
-In the main.js module: Import the createPlan() function.
-Invoke the function and assign the returned value to a variable: yearlyPlan
example of syntax:
const appropriatelyNamedVariable = theFunctionThatReturnsAValue()

**Seed Instructions**
1. create a module for each type of plant seeds ( scripts/seeds/corn.js) 1 person does this
2. define and export a function for creating a seed ( createSeed)
3. each should return an object with type, height, output (table example in directions)
4. corn is the exception createCorn function return array with two identical objects in it
5. write some main to test as console log
example:  import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

**Tilling the Field**
1. create  scripts/fields.js
2. Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
3.  define and export a function named addPlant.
4. addPlant function must accept a seed object as input. The function will add the seed to the field ( we use .push() )
5.Define and export a function named usePlants that returns a copy of the array of plants

**Sowing the Field with Your Tractor**
1. create scripts/tractor.js
2. define and export plantSeeds function
3. The function must accept the year's planting plan as input (i.e. it must define a parameter).
4. The plan is an array. It contains 3 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
5. As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
6. Take that seed and add it to the array of plants in the field module.

** Collecting the Harvest**
1. create scripts/harvester.js
2. define and export harvestPlants function
3. harvestPlants function must accept the plants array as input
4. The function will return an array of seed objects.
5. Iterate the array of growing plants. On each plant, get the value of the output property.
6. Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
7. Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
8. Again check in your main.js the logic with console.log

** Selling the Harvest Online**
1. Use Flexbox to make a grid layout like below
2. Create a <main> element in your index.html file. Make sure the element has a class of container.
3. Create a scripts/catalog.js module.
4. Define and export a Catalog function.
5.The Catalog function should accept the harvested food array as input.
6. The Catalog function should iterate the array of food objects.
7. As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.
<section class="plant">Corn</section>