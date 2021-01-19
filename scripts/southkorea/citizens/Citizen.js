export const citizen = (citizen) =>{
    return `
        <section class="southkorea__citizen">
            <h1>${citizen.name}</h1>
            <img src="${citizen.image}" alt="citizen image" />
            <div>${citizen.text}</div>
        </section>
    `
} 