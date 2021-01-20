

export const City = (city) =>{
    return `
        <section class="southkorea__city">
            <h2>${city.name}</h2>
            <img src="${city.image}" alt="city image" />
            <div>${city.text}</div>
        </section>
    `
}