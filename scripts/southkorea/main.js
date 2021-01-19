import { useCities } from "./cities/CityDataProvider.js"
import { City } from "./cities/City.js"

console.log(City(useCities()[0]));
