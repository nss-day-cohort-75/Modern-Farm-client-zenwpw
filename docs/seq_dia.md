## Sequence Diagram

```mermaid
sequenceDiagram
    participant Main as ./scripts/main.js
    participant Plan as ./scripts/plan.js
    participant Seeds as ./scripts/seeds/
    participant Tractor as ./scripts/tractor.js
    participant Harvester as ./scripts/harvester.js
    participant Fields as ./scripts/fields.js
    participant Catalog as ./scripts/catalog.js

    Note over Main: Initialize the program
  
    Main->>Plan: Create a yearly plan
    Plan-->>Main: Return the plan

    Main->>Tractor: Plant seeds based on the plan
 	   Tractor->>Seeds: Create seeds for each crop type
    Seeds->>Tractor: Return the seeds
    Tractor->>Fields: Add the seeds to the field
    Fields->>Main: Updated field

    Main->>Fields: View the field
    Fields-->>Main: Return the plants in the field

    Main->>Harvester: Harvest the plants
    Harvester-->>Main: Return the harvested seeds

    Main->>Catalog: Set the harvested food array
    Catalog-->>Main: Update the catalog

    Main->>Catalog: Call the catalog function
    Catalog-->>Main: Update the HTML with the harvested food
    Note over Main: Send the updated HTML to the DOM

  ```  

## Dependency Graph

```mermaid
graph LR
  Main --> Plan
  Main --> Tractor
  Tractor --> Seeds
  Tractor --> Fields
  Main --> Fields
  Main --> Harvester
  Main --> Catalog
  

