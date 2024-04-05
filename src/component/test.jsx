// ChildComponent.js
import { useContext } from 'react';
import PokerGameContext from '../context/connectWS';

function ChildComponent() {
 const { roomId,readyState, lastMessage } = useContext(PokerGameContext);

 // Aquí puedes usar roomId, setRoomId, lastMessage, y sendJsonMessage según sea necesario

 return (
    <div>
      <p>Room ID: {roomId}</p>
      <h1>Ready: {readyState}</h1>
      {/* Muestra el último mensaje recibido, por ejemplo */}
      <p>Last Message: {lastMessage ? lastMessage.data : 'No message yet'}</p>
    </div>
 );
}

export default ChildComponent;
