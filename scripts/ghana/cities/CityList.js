import { useCity } from "./CityDataProvider.js"
import { City } from "./City.js"


export const CityList = () => {

    const contentElement = document.querySelector(".cities__content-container")
    const citiesArray = useCity()
    let cityHTMLRepresentations = ""

    for (const cityObject of citiesArray) {
        cityHTMLRepresentations += City(cityObject) 
    }

    contentElement.innerHTML += `
        <div class="cities__content-container">
            ${cityHTMLRepresentations}
        </div>
    `
}