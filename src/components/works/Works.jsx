import "./works.scss"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useState} from "react"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: "1",
            icon: "./assets/mobileicon.jpg",
            title: "Blurble",
            desc: "Blurble is an online platform for hosting book clubs. It allows book clubs meeting in the real world to continue conversations online as they read, as well as empowering readers to start completely virtual clubs for the books they love! Readers’ comments and discussions are page-specific, and tracking your own progress in the book means you never see spoilers (unless you want to!). Members can also nominate and vote for their club’s next book.",
            img: "assets/blurble3.png",
            link: "https://github.com/Sam-Mod23/Blurble"
        },
        {
            id: "2",
            icon:"./assets/laptop-code2.png",
            title: "NC news backend API",
            desc: "This is all the back end to my NC News wesbite. I used PSQL to create the databases, Jest and SuperTest to test all my API requests and Heroku to host the API. I used a MVC setup for my API requests and even added example requests to make the connection to my NCNews front end more straightforward and easier to follow.",
            img: "assets/Nc-news-backend-api.png",
            link: "https://github.com/joetilbybaxter/BackEndNCNews"
        },
        {
            id: "4",
            icon: ".assets/laptop-code.png",
            title: "Countdown Timer",
            desc: "This is a simple countdown timer that is currently being used for Christmas Day but can be changed to any date specified. This Web page uses HTML, CSS and JavaScript. The JavaScript involves the subtraction of current time and date from the time and date specified by the timer.",
            img: "assets/CountdownTimer.png",
            link: "https://github.com/joetilbybaxter/countdown-timer"
        },
        {
            id: "3",
            icon: "./assets/laptop-code2.png",
            title: "NC news frontend",
            desc: "This is an online news website",
            img: "",
            link: ""

        },

    ]

    const handleClick = (way)=> {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0)
    }
    return(
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=> (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>{d.link}</span>
                            </div>
                        </div>
                        <div className="right">
                            
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>))}
               
            </div>
            <ArrowForwardIosIcon className="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowForwardIosIcon className="arrow right" onClick={()=>handleClick("right")}/>
        </div>
    )
}