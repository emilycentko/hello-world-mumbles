export const landmark = (landmark) =>{
    return `
        <section class="southkorea__landmark">
            <h4>${landmark.name}</h4>
            <img src="${landmark.image}" alt="landmark image" />
            <div>${landmark.text}</div>
        </section>
    `
} 