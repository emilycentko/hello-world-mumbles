export const landmark = (landmarkObj) => {
    return `
    <div class="landmarks__card">
    <img class ="landmarks__card-image" src="/images/${landmarkObj.image}" alt="">
    <p class="landmarks__card-text">${landmarkObj.name}</p>
    <p class="landmarks__card-text">${landmarkObj.text}</p>
</div>
    `
}