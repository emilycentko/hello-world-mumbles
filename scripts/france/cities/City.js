export const City = (city) => {
    return `
          <div class="cities__card">
            <img class="citites__card-image" src=${city.image}>
            <p class="cities__card-name>${city.name}</p>
            <p class="cities__card-text">${city.text}</p>
          </div>
        `
}