const landmarkList = [
    {
    name: "Giants Causeway",
    image: "giantscauseway.jpg",
    text: "Nature. That's pretty neat.",
    },
    {
    name: "The Old Library",
    image: "oldlibrary.jpg",
    text: "Books!",
    },
    {
    name: "Cliffs of Moher",
    image: "cliffsofmoher2.jpg",
    text: " Probably near Moher?",
    }
]

export const useLandmark = () => {
    return landmarkList.slice()
}