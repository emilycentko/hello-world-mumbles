import { useCity } from './CityDataProvider.js'
import { city } from './City.js'

export const cityList = () => {
    const cityContainer = document.querySelector('.cities__wrapper')
    const cities = useCity()
    let cityHTML = ""
    
    for (const cityObj of cities) {
        cityHTML += city(cityObj)
    }
    cityContainer.innerHTML +=`
    <h2 class="ireland__titles">Notable Cities</h2>
    ${cityHTML}
    `
}