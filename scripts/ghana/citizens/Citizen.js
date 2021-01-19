/**
 *  Citizen which renders individual citizen objects as HTML
 */
export const Citizen = (citizen) => {
    return `
            <div class="citizens__card">${citizen.name}</p>
                <img  class="citizens__card-img" src="${citizen.image}"/>
                <p class="citizens__card-text">${citizen.text}</p>
            </div>    
    `
}
