import { useContext, useEffect, useState } from "react";
import "./App.css";
import PokerGameContext from "./context/connectWS";

function App() {
  const { roomId, readyState, lastMessage } = useContext(PokerGameContext);
  const [data, setData] = useState();
  const [id, setId] = useState();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage?.data);
      setData(data.info);
      if (data.info?.players) {
        const playersArray = Object.values(data.info.players);
        setPlayers(playersArray);
        console.log(playersArray);
      }

      if (data?.yourID) {
        setId(data?.yourID);
      }
    }
  }, [lastMessage]);

  return (
    <main>
      <div className="container">
        <div className="board"></div>
        {players.map((item, i) =>
          item.id == id ? (
            <div key={i} className="principal">
              {item.cards}
            </div>
          ) : (
            <div key={i} className={`p${i + 1}`}>
              {item.cards}
            </div>
          )
        )}
      </div>
      <div className="buttons">
        <div className="comb-content">
          <button className="comb-button">COMBINACIONES</button>
        </div>

        <div className="game-button">
          <button className="retinarse-button">RETIRARSE</button>
          <button className="igualar-button">IGUALAR</button>
          <button className="subir-button">SUBIR</button>
        </div>
      </div>
    </main>
  );
}
export default App;
