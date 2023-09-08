import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection(){
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> If you really want to make a friend, go to someone's house and eat with him... the people who give you their food give you their heart.
</p>
            <p className="qoute-auther">- Cesar_Chavez</p>
        </div>
    )
}