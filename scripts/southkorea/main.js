import { useCities } from "./cities/CityDataProvider.js"
import { city } from "./cities/City.js"

console.log(city(useCities()[0]));
