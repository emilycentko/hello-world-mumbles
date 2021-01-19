const citizenCollection = [
    {
        name: "Herman Kojo Chinery-Hesse",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Herman_Chinery-Hesse.jpg",
        text: "Herman Kojo Chinery-Hesse was born 1963 is a Ghanaian technology entrepreneur and the founder of theSOFTtribe, the oldest and foremost software company in Ghana. He is popularly known as the Bill Gates of Africa."
    },
    {
        name: "Kwame Akoto-Bamfo",
        image: "https://thesoleadventurer.com/wp-content/uploads/2019/08/Kwame-Akoto-Bamfo-Portrait.jpeg",
        text: "Kwame Akoto-Bamfo is a Ghanaian sculptor. His outdoor sculpture dedicated to the memory of the victims of the Transatlantic slave trade is on display at the National Memorial for Peace and Justice that opened in 2018 in Montgomery, Alabama. His other sculptures include an installation of 1,200 concrete heads representing Ghana’s enslaved ancestors in Accra, the capital of Ghana. Called Faux-Reedom, it was unveiled in 2017."
    },
    {
        name: "Michael Blackson",
        image: "https://mms.businesswire.com/media/20180214006376/en/640949/5/917187282.jpg",
        text: "Michael Blackson was born on November 28, 1972 in Ghana. He is an actor and writer, known for Next Friday (2000), The Savages (2007) and Meet the Blacks (2016)."
    }
] 

export const useCitizen = () => {
    console.log(citizenCollection)
    return citizenCollection.slice()
}
