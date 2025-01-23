
export const Catalog = (harvestedFood, containerElement) => {
    harvestedFood.forEach((seed) => {
      containerElement.innerHTML += `<section class="plant">${seed.type}</section>`;
    })
  }
