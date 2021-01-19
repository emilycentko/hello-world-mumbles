const citizenList = [
    {
    name: "Bono",
    image: "bono.jpeg",
    text: "Bono is the lead vocalist for U2.",
    },
    {
    name: "Saint Patrick",
    image: "saint-patrick-snakes.jpg",
    text: "Dude hated snakes.",
    },
    {
    name: "Liam Neeson",
    image: "liam-neeson.jpg",
    text: "Most famous for his portrayal of Qui-Gon Jinn.",
    }
]

export const useCitizen = () => {
    console.log(citizenList)
    return citizenList.slice()
}