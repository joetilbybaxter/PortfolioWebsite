import "./contacts.scss"
import ContactsIcon from '@material-ui/icons/Phone';
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
                
                
                <img src="assets/email.jpg"></img>
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