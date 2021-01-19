const cities = [
    {
        name : "Seoul" ,
        image : "images/seoul.jpg",
        text : "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees."
    },
    {
        name : "Seomyeon" ,
        image : "images/seomyeon.jpeg",
        text : "Seomyeon is the commercial center and transportation hub in Busanjin-gu, Busan, South Korea. Seomyeon is also the most crowded area in Busan, having an average floating population of 1,000,000 a day.[1] Seomyeon has three underground shopping malls meeting beneath the Seomyeon road junction, a department store, many shopping stores, bars, restaurants, movie theaters, banks, bookstores, clinics, etc."
    },
    {
        name : "Busan",
        image : "images/busancity.jpg",
        text : "Busan, a large port city in South Korea, is known for its beaches, mountains and temples. Busy Haeundae Beach features the Sea Life Aquarium, plus a Folk Square with traditional games such as tug-of-war, while Gwangalli Beach has many bars and views of modern Diamond Bridge. Beomeosa Temple, a Buddhist shrine founded in 678 A.D., is at the base of Geumjeong Mountain, which has hiking trails",
    }
]
export const useCities = () =>{
    return cities.slice();
}