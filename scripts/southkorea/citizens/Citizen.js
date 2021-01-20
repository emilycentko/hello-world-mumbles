export const citizen = (citizen) =>{
    return `
        <section class="southkorea__citizen">
            <h3>${citizen.name}</h3>
            <img src="${citizen.image}" alt="citizen image" />
            <div>${citizen.text}</div>
        </section>
    `
} 