import { useLandmarksObjects } from './LandmarkDataProvider.js'
import { Landmark } from './Landmark.js'

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmarks__content__container");
    const landmarksArray = useLandmarksObjects()

    let landmarksHTMLRepresentation = ""

    for (const landmark of landmarksArray) {
        landmarksHTMLRepresentation += Landmark(landmark)
    }

    contentElement.innerHTML += `
    <div class="landmarks__content__container">
        ${landmarksHTMLRepresentation}
    </div>
    `
}
