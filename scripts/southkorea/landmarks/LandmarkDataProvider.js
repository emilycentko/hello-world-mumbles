const landmarks = [
    {
        name : "Changdeokgung Palace" ,
        image : "images/Chang Palace.jpg",
        text : "Changdeokgung, also known as Changdeokgung Palace or Changdeok Palace, is set within a large park in Jongno-gu, Seoul, South Korea. It is one of the Five Grand Palaces built by the kings of the Joseon Dynasty."
    },
    {
        name : "Busan" ,
        image : "images/BUSAN.jpg",
        text : "Busan is a center for international conventions, hosting APEC in 2005. It is also a center for sports tournaments in Korea, having hosted the 2002 Asian Games and FIFA World Cup. It is home to the world's largest department store, the Shinsegae Centum City.[6] Busan was added to the UNESCO Creative Cities Network as a City of Film in December 2014.[7]"
    },
    {
        name : "Jeonju",
        image : "images/JEONJU.jpg",
        text : "In May 2012, Jeonju was chosen as a Creative Cities for Gastronomy as part of UNESCO's Creative Cities Network. This honour recognizes the city's traditional home cooking handed down over thousands of years, its active public and private food research, a system of nurturing talented chefs, and its hosting of distinctive food festivals.",
    }
]
const useLandmarks = () =>{
    return landmarks.slice();
}