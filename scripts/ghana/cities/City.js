/**
 *  City which renders individual city objects as HTML
 */
export const City = (city) => {
    return `
            <div class="cities__card">${city.name}</p>
                <img  class="cities__card-img" src="${city.image}"/>
                <p class="cities__card-text">${city.text}</p>
            </div>    
    `
}
