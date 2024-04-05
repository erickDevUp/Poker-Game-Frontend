import  { createContext, useState } from 'react';

const PokerGameContext = createContext();

import useWebSocket from 'react-use-websocket';

// eslint-disable-next-line react/prop-types
export function PokerGameProvider({children}) {
    const [roomId, setRoomId] = useState(1);
const { getWebSocket, lastMessage, sendJsonMessage, readyState } = useWebSocket(
  `ws://127.0.0.1:8000/ws/room/${roomId}/`
);

  return (   
  <PokerGameContext.Provider value={{ roomId, setRoomId, lastMessage, sendJsonMessage,getWebSocket,readyState }}>
       {children}
    </PokerGameContext.Provider>
  );
}


export default PokerGameContext;