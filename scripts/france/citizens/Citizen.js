export const Citizen = (citizen) => {
    return `
          <div class="citizens__card">
            <img class="citizens__card-image" src="${citizen.image}">
            <p class="citizens__card-name">${citizen.name}</p>
            <p class="citizens__card-text">${citizen.text}</p>
          </div>
        `
}