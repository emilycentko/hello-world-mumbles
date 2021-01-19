import { useCitiesObjects } from './cities/CityDataProvider.js'
import { useCitizensObjects } from './citizens/CitizenDataProvider.js'
import { useLandmarksObjects } from './landmarks/LandmarkDataProvider.js'

useCitiesObjects();
useCitizensObjects();
useLandmarksObjects();