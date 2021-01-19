export const city = (cityObj) => {
    return `
    <div class="cities__card">
    <img class="cities__card-image" src="/images/${cityObj.image}g" alt="">
    <p class="cities__card-text">${cityObj.name}</p>
    <p class="cities__card-text">${cityObj.text}</p>
</div>
    `
}