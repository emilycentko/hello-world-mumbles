import { useCitiesObjects }  from './CityDataProvider.js'
import { City } from './City.js';

export const cityList = () => {
    const contentElement = document.querySelector(".cities__content__container");
    const citiesArray = useCitiesObjects()

    let citiesHTMLRepresentation = ""

    for (const city of citiesArray) {
        citiesHTMLRepresentation += City(city)
    }

    contentElement.innerHTML += `
    <div class="cities__content__container cities">
        ${citiesHTMLRepresentation}
    </div>
    `

}