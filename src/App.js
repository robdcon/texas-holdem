import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {

  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('message', (data) => {
      setResponse(data);
    })
  }, [])

  return (
    <div className="App">
     {response}
    </div>
  );
}

export default App;
