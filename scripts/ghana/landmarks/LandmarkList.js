import { useLandmark } from "./LandmarkDataProvider.js"
import { Landmark } from "./Landmark.js"


export const LandmarkList = () => {

    const contentElement = document.querySelector(".landmark__content-container")
    const landmarkArray = useLandmark()
    let landmarkHTMLRepresentations = ""

    for (const landmarkObject of landmarkArray) {
        landmarkHTMLRepresentations += Landmark(landmarkObject) 
    }

    contentElement.innerHTML += `
        <div class="landmark__content-container">
            ${landmarkHTMLRepresentations}
        </div>
    `
}