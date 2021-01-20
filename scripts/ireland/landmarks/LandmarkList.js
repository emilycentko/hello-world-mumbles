import { useLandmark } from './LandmarkDataProvider.js'
import { landmark } from './Landmark.js'

export const printLandmarkList = () => {
    const contentElement = document.querySelector('.landmarks__wrapper')
    const landmarksArray = useLandmark()
    let landmarkHTML = ""

    for (const landmarkObj of landmarksArray) {
        landmarkHTML += landmark(landmarkObj)

    }
    contentElement.innerHTML += `
${landmarkHTML}    
`
}