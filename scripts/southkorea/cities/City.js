

export const city = (city) =>{
    return `
        <section class="southkorea__city">
            <h1>${city.name}</h1>
            <img src="${city.image}" alt="city image" />
            <div>${city.text}</div>
        </section>
    `
}