const cityCollection = [
    {
        name: "Cape Coast",
        image: "https://visitghana.com/wp-content/uploads/2018/08/2347_Cape_Coast_Castle_Courtyard_02_Sept_2012.jpg",
        text: "Cape Coast is a city, fishing port, and the capital of Cape Coast Metropolitan District and Central Region of south Ghana. One of the country's most historic cities, it is the location of Cape Coast Castle, a World Heritage Site, with the Gulf of Guinea situated to its south."
    },
    {
        name: "Accra",
        image: "https://revivme.com/wp-content/uploads/2019/09/accra-nns.jpg",
        text: "At just over two million inhabitants Accra is the largest city in Ghana. This capital city is full of character and radiates friendliness. Whether you’re there as a solo traveller or with a family, on your big annual holiday or there for business, Accra has something to make you feel comfortable. What tourists really love are the many beaches surrounding the city – particularly Labadi Beach. Accra is home to the National Museum where you’ll find many of the countries historical treasures. You can also visit the National Theatre, International Trade Fair, the Kwame Nkrumah memorial, Independence Square, and W.E.B. Dubois Centre. At every turn you’ll find markets, incredible food, wonderful music, and lots of traffic! Top it all off with a trip to one of the many coffin shops in Teshie."
    },
    {
        name: "Kumasi",
        image: "https://i.ytimg.com/vi/XaULkUA1fgU/maxresdefault.jpg",
        text: "Kumasi is the capital city of the Ashanti Region, in southern Ghana. It’s known as a center for Ashanti culture. In the huge, open-air Kejetia Market, stalls sell everything from glass beads to Ashanti sandals. The National Cultural Centre offers craft workshops and dance performances. It includes the Prempeh II Jubilee Museum, which displays jewelry and ceremonial clothing belonging to the 20th-century Ashanti king"
    }
]

export const useCity = () => {
    console.log(cityCollection)
    return cityCollection.slice()
}
