const cityList = [
    {
    name: "Dublin",
    image: "dublin-ireland-map.jpg",
    text: "A city called Dublin",
    },
    {
    name: "Waterford",
    image: "waterford-ireland-map.jpg",
    text: "A city called Waterford",
    },
    {
    name: "Cork",
    image: "cork-ireland-map.jpg",
    text: "A city called Cork",
    }
]

export const useCity = () => {
    return cityList.slice()
}