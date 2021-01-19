/**
 *  Landmark which renders individual landmark objects as HTML
 */
export const Landmark = (landmark) => {
    return `
            <div class="landmark__card">${landmark.name}</p>
                <img  class="landmark__card-img" src="${landmark.image}"/>
                <p class="landmark__card-text">${landmark.text}</p>
            </div>    
    `
}
