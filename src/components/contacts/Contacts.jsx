import "./contacts.scss"

import {useState} from "react"

export default function Contacts() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {

        e.preventDefault();
        setMessage(true)
    }
    return(
        <div className="contacts" id="contact">
            <div className="left">
                <h1>About me</h1>
                <p>I am a highly self-motivated individual who only learnt about what code was last year. Since learning about it I have completed and graduated from Northcoder's 12 week coding Bootcamp and then gone on to learn more about software development in my own time. I am yet to aquire all the technicial skills to be a highly effective full stack developer, however I am very determined to get there and I do offer a genuine desire to learn these skills. I may need a little helping hand throughout my junior development, but I can guaruntee a repayment of my full dedication to the company and the development of my own skills.</p>
                <p>Apart from being interested in technology I am also an avid athlete who enjoys participating in sports such as Rugby Union and spending my spare time improving my body at the gym and improving my mind in the wonderful world of literature. I'm a very social person who enjoys working in teams and sharing experiences with anyone who is willing to experience things with me.</p>
                <h2>Feedback</h2> 
                <p>Any feedback or advice on my Portfolio and other coding projects would be highly appreciated as I'm trying to improve my craft. If you have any questions or would like me to indulge myself into any technologies, stacks or languages please contact me using any of my information. Many thanks for taking your time to look at my work and I hope you have a lovely day!</p>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="">Send</button>
                    {message && <span>Thankyou for the message, I will get back in touch soon!</span>}
                </form>
            </div>
        </div>
    )
}