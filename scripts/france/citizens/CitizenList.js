import { useCitizensObjects } from './CitizenDataProvider.js'
import { Citizen } from './Citizen.js'

export const citizenList = () => {
    const contentElement = document.querySelector(".citizens__content__container");
    const citizensArray = useCitizensObjects()

    let citizensHTMLRepresentation = ""

    for (const citizen of citizensArray) {
        citizensHTMLRepresentation += Citizen(citizen)
    }

    contentElement.innerHTML += `
    <div class="citizens__content__container citizens">
        ${citizensHTMLRepresentation}
    </div>
    `
}
