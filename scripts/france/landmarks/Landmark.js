export const Landmark = (landmark) => {
    return `
        <div class="landmarks__card"
            <img class="landmarks__card-image" src="${landmark.image}">
            <p class="landmarks__card-name">${landmark.name}</p>
            <p class="landmarks__card-text">${landmark.text}</p>
        </div>
    `
}