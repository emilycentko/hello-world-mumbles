import { useCitizen } from './CitizenDataProvider.js'
import { citizen } from './Citizen.js'

export const citizenPrintList = () => {
    const contentElement = document.querySelector('.citizens__wrapper')
    const citizenArray = useCitizen()
    
    let citizenHTML = ""

    for (const citizenObj of citizenArray) {
        citizenHTML += citizen(citizenObj)
    }

    contentElement.innerHTML += `
    <h2 class="ireland__titles">Notable Citizens</h2>
    ${citizenHTML}
    `
}