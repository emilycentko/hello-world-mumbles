const landmarkCollection = [
    {
        name: "Kwame Nkrumah Memorial Park & Mausoleum",
        image: "https://visitghana.com/wp-content/uploads/2018/06/Nkrumah-Mausoleum.jpg",
        text: "The Kwame Nkrumah Mausoleum and memorial park is located in downtown Accra, the capital of Ghana. It is dedicated to the prominent Ghanaian President Kwame Nkrumah. The memorial complex was dedicated in 1992, and is situated on the site of the former British colonial polo grounds in Accra."   
    },
    {
        name: "Cape Coast Castle",
        image: "https://visitghana.com/wp-content/uploads/2018/08/2347_Cape-Coast-castle-Built-around-1610-.jpg",
        text: "Cape Coast Castle, is one of about forty 'slave castles', or large commercial forts, built on the Gold Coast of West Africa (now Ghana) by European traders. It was originally a Portuguese 'feitoria' or trading post, established in 1555, which they named Cabo Corso. However, in 1653 the Swedish Africa Company constructed a timber fort there. It originally was a centre for the trade in timber and gold. It was later used in the trans-Atlantic slave trade. Other Ghanaian slave castles include Elmina Castle and Fort Christiansborg. They were used to hold slaves before they were loaded onto ships and sold in the Americas, especially the Caribbean. This 'gate of no return' was the last stop before crossing the Atlantic Ocean."   
    },
    {
        name: "Wli Waterfall",
        image: "https://eyalitours.com/wp-content/uploads/2019/06/boti-falls-tourism.jpg",
        text: "Wli Waterfalls (pronounced ‘vlee’), also called Agumatsa Falls, is a popular and dramatic tourist site near the village of Wli not far from the Togo border. Most tourist make the easy walk to the lower falls, which is mostly a flat trail but stunning and beautiful in setting, made even more dramatic by the presence of thousands of fruit bats nesting high up on the nearby cliffs. However, the equally high and much more isolated upper falls is a special treat for those with the stamina for the challenging hike. There are inviting pools at the base of both falls where the hearty can take a chilly dip. The Wli waterfalls is the highest water fall in West Africa. The falls is known locally as Agumatsa waterfalls – meaning, “Allow Me to Flow.” It is located in the Hohoe municipality of the Volta Region, the land of the  Ewe culture. It is approximately 280 kilometers from the capital Accra. The walk take you through the Agumatsa Wildlife Sanctuary, which features more than 200 bird species and 400 butterfly species."
    }
]

export const useLandmark = () => {
    console.log(landmarkCollection)
    return landmarkCollection.slice()
}