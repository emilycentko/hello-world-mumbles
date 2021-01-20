import { useCitizen } from "./CitizenDataProvider.js"
import { Citizen } from "./Citizen.js"


export const CitizenList = () => {

    const contentElement = document.querySelector(".citizens__content-container")
    const citizenArray = useCitizen()
    let citizenHTMLRepresentations = ""

    for (const citizenObject of citizenArray) {
        citizenHTMLRepresentations += Citizen(citizenObject) 
    }

    contentElement.innerHTML += `
        <div class="citizens__content-container">
            ${citizenHTMLRepresentations}
        </div>
    `
}