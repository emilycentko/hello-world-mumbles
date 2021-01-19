const citizenObjects = [
    {
        name: "Carla Bruni",
        image: "images/carla-b.jpg",
        text: "Carla Bruni Sarkozy is an Italian-French singer-songwriter and fashion model. In 2008, she married Nicolas Sarkozy, then president of France."
        
    },
    {
        name: "Jean-Luc Godard",
        image: "images/godard.jpg",
        text: "Jean-Luc Godard is a French-Swiss film director, screenwriter and film critic. He rose to prominence as a pioneer of the 1960s French New Wave film movement, and is arguably the most influential French filmmaker of the post-war era."
        
    },
    {
        name: "Catherine Deneuve",
        image: "images/catherine-d.jpg",
        text: "Catherine Deneuve is a French actress as well as an occasional singer, model and producer, considered one of the greatest European actresses."
        
    }
]

export const useCitizensObjects = () => {
    return citizensObjects.slice();
}