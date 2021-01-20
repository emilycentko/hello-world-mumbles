import { useLandmarks } from './LandmarkDataProvider.js'
import { landmark } from './Landmark.js'

export const landmarkList = () => {
    const landmarkContainer = document.querySelector('.landmarks')
    const landmarks = useLandmarks()
    let landmarkHTML = ""
    
    for (const landmarkObj of landmarks) {
        landmarkHTML += landmark(landmarkObj)
    }
    landmarkContainer.innerHTML += landmarkHTML
}