const citizens = [
    {
        name : "Black Pink" ,
        image : "images/BlackPink.jpg",
        text : "Blackpink is a South Korean girl group formed by YG Entertainment, consisting of members Jisoo, Jennie, Rosé, and Lisa."
    },
    {
        name : "BTS" ,
        image : "images/BTS.jpg",
        text : "BTS, also known as the Bangtan Boys, is a seven-member South Korean boy band that began formation in 2010 and debuted in 2013 under Big Hit Entertainment. The septet—composed of RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook—co-writes and co-produces much of their own output."
    },
    {
        name : "Wannaone",
        image : "images/WANNAONE.jpg",
        text : "Wanna One was a South Korean boy band formed by CJ E&M through the second season of Produce 101. The group was composed of eleven members: Kang Daniel, Park Ji-hoon, Lee Dae-hwi, Kim Jae-hwan, Ong Seong-wu, Park Woo-jin, Lai Kuan-lin, Yoon Ji-sung, Hwang Min-hyun, Bae Jin-young and Ha Sung-woon.",
    }
]
const useCitizens = () =>{
    return citizens.slice();
}