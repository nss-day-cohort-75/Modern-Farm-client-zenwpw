
export const Catalog = (harvestedFood) => {
 let plantHTML = "" ;
    harvestedFood.forEach((seed) => {
      plantHTML += `<section class="plant">${seed.icon} <br> ${seed.type}</section>`;
    })
    return plantHTML;
  }
