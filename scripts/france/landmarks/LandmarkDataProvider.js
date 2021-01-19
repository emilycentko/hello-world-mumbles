const landmarksObjects = [
    {
        name: "The Louvre",
        image: "images/louvre.jpg",
        text: "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France."
        
    },
    {
        name: "Paris Catacombs",
        image: "images/catacombs.jpg",
        text: "The Catacombs of Paris are underground ossuaries in Paris, France, which hold the remains of more than six million people in a small part of a tunnel network built to consolidate Paris' ancient stone quarries."
        
    },
    {
        name: "Pont d'Avignon",
        image: "images/pont-davignon.jpg",
        text: "The Pont Saint-Bénézet, also known as the Pont d'Avignon, is a famous medieval bridge in the town of Avignon, in southern France."
        
    }
]

export const useLandmarksObjects = () => {
    landmarksObjects.slice();
}