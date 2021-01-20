const citiesObjects = [
    {
        name: "Paris",
        image: "images/paris.jpg",
        text: "Paris is the capitol of France."
        
    },
    {
        name: "Nice",
        image: "images/nice.jpg",
        text: "Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges."
        
    },
    {
        name: "Marseilles",
        image: "images/marseilles.jpg",
        text: "Marseille is a port city in southern France."
        
    }
]

export const useCitiesObjects = () => {
    return citiesObjects.slice();
}