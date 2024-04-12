import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:3000";

export const SocketComponent: React.FC = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data: string) => {
      setResponse(data);
    });

    socket.emit("message", response);
    return () => { socket.disconnect(); };
  }, []);

  return (
    <div>
      <p>{response}</p>
    </div>
  );
}


