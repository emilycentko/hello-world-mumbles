export const landmark = (landmark) =>{
    return `
        <section class="southkorea__landmark">
            <h1>${landmark.name}</h1>
            <img src="${landmark.image}" alt="landmark image" />
            <div>${landmark.text}</div>
        </section>
    `
} 