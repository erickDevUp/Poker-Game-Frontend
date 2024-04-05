import { formatCard } from "../../utils/formatCard";
import "./index.css"
// eslint-disable-next-line react/prop-types
export default function Card({card}) {
    let imgCard =''
    if (card) {
        imgCard = formatCard(card[0].toString().trim())
        console.log(imgCard);
    }
    return (
    <img 
    src={card?`./image/cards/${imgCard}.png`:`./image/cards/back.jpg`} 
    alt={`${card} card`} 
    className="cardImg"
  />
  )
}