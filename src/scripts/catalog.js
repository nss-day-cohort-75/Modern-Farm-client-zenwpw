
export const Catalog = (harvestedFood) => {
 let plantHTML = "" ;
    harvestedFood.forEach((seed) => {
      plantHTML += `<section class="plant">${seed.type}</section>`;
    })
    return plantHTML;
  }
