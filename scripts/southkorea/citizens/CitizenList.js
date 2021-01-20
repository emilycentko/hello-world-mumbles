import { useCitizens } from './CitizenDataProvider.js'
import { citizen } from './Citizen.js'

export const citizenList = () => {
    const citizenContainer = document.querySelector('.citizens')
    const citizens = useCitizens()
    let citizenHTML = ""
    
    for (const citizenObj of citizens) {
        citizenHTML += citizen(citizenObj)
    }
    citizenContainer.innerHTML += citizenHTML
}