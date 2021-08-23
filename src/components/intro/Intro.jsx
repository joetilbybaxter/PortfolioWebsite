import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current,{
            showCursor: true,
            backDelay: 1500,
            strings: ["developer", "designer", "creator"]
        })
    }, [])
    return(
        <div className="intro" id="intro">
            <div className="left">
            <div className="imgContainer">
                <img src="assets/headshot.jpg" alt=""></img>
            </div>
          
            </div>
            <div className="right">
            <div className="wrapper">
                    <h2>Hello there, I am</h2>
                    <h1>Joe Tilby-Baxter</h1>
                    <h3>Full stack <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreIcon className="arrow"/>
                </a>
            </div>
        </div>
    )
}