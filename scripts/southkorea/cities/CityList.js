import { useCities } from './CityDataProvider.js'
import { City } from './City.js'

export const cityList = () => {
    const cityContainer = document.querySelector('.cities')
    const cities = useCities()
    let cityHTML = ""
    
    for (const cityObj of cities) {
        cityHTML += City(cityObj)
    }
    cityContainer.innerHTML += cityHTML
}