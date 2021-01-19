export const citizen = (citizenObj) => {
    return `
    <div class="citizens__Card">
    <img class ="citizens__card-image" src="/images/${citizenObj.image}" alt="">
    <p class="citizens__card-text">${citizenObj.name}</p>
    <p class="citizens__card-text">${citizenObj.text}</p>
</div>
    `
}