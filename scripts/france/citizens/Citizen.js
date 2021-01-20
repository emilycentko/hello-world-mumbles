export const Citizen = (citizen) => {
    return `
          <div class="citizens__card">
            <img class="france_citizens__card-image" src="${citizen.image}">
            <p class="france_citizens__card-name">${citizen.name}</p>
            <p class="france_citizens__card-text">${citizen.text}</p>
          </div>
        `
}